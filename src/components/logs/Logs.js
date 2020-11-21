import React, { useEffect } from "react";
import { connect } from "react-redux";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    // logs take some time to load
    return <Preloader />;
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

Logs.propTypes = {
  log: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
// connect returns a high level method
//connect takes in two things
// mapStateToProps => anything u want from app level state u bring into component as prop
