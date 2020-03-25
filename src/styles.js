const styles = ({ spacing: { unit } }) => ({
  content: {
    display: "flex",
    justifyContent: "center",
  },
  paper: {
     margin: unit * 3,
     padding: unit * 3,
     width: "100%",
     maxWidth: 450,
  },
  input: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-evenly"
  },
  title: {
    fontSize: 30,
    fontWeight: "normal"
  }
});

export default styles;