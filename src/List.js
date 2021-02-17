import React, { useState, useEffect } from "react";
import db from "./firebase";
import "./List.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

function List() {
  const [weights, setWeights] = useState([]);

  useEffect(() => {
    db.collection("Health")
      .orderBy("timestampp", "desc")
      .onSnapshot((snapshot) => {
        setWeights(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            weight: doc.data().weight,
            timestampp: doc.data().timestampp,
          }))
        );
      });
  }, []);

  const useStyles = makeStyles({
    table: {
      minWidth: 200,
      maxWidth: 1000,
    },
  });

  const classes = useStyles();

  return (
    <div className="list">
      <h1>Dataset</h1>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          aria-label="simple table"
          table-layout="fixed"
          white-space="nowrap"
        >
          <TableHead>
            <TableRow>
              <TableCell>Weight (KG)</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {weights.map((data) => (
              <TableRow key={data.id}>
                <TableCell component="th" scope="row">
                  {data.weight}
                </TableCell>
                <TableCell align="right">{data.timestampp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default List;
