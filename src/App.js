import { Paper, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar'
// import { Paperfrom '@material-ui/core';
import VerticalBar from './VerticalBar';
import PieChart from './PieChart';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 400,
    width: 400,
    textAlign: 'center',
    margin: "0 auto",
    marginTop: 50,
    padding: 15
  },
  input: {
    width: '95%',
    marginBottom: 10
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <VerticalBar />
      <PieChart />
      {/* <Navbar />
      <Paper elevation={3} className={classes.paper} >
        <h1>Login</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Enter Email" className={classes.input} />
          <TextField label="Enter Password" className={classes.input} />
          <Button variant="contained" color="primary" className={classes.input}>
            Login
          </Button>
        </form>
      </Paper> */}

    </div>
  );
}

export default App;
