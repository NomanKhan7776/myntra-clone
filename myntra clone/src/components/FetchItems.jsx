import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemsSlice";
import { fetchAction } from "../store/fetchStatus";


function FetchItems() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.isFetchDone) return;
    dispatch(fetchAction.markFetchStart());
    const controller = new AbortController();
    const { signal } = controller;
    fetch("http://localhost:8080/items", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("something wrong with the server");
        } else {
          return res.json();
        }
      })
      .then(({ items }) => {
        dispatch(fetchAction.markFetchDone());
        dispatch(fetchAction.markFetchEnd());
        dispatch(itemsAction.addInitialItem(...items));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus.isFetchDone, dispatch]);
  return <></>;
}

export default FetchItems;
