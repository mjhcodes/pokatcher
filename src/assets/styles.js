import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "20px",
    width: "auto",
    minWidth: "12rem",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "5px solid #05c7f2",
    borderRadius: "20px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(7, 5, 9),
    textAlign: "center",
  },
  form: {
    "& > *": {
      marginTop: "3rem",
      textAlign: "center",
    },
  },
  input: {
    "& > *": {
      textAlign: "center",
    },
  },
}));
