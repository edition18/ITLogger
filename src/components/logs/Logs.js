import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";

const Logs = (props) => {
  const [logs, setLogs] = useState([]);
  // empty array, since we would have multiple items in Logs
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("/logs");
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };

  if (loading) {
    return <h4>Loading</h4>;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Systemlogs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <Preloader />
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {};

export default Logs;
