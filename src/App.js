import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root2: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
    'id': 1,
    'image': 'http://placeimg.com/64/64/1',
    'name': '太郎',
    'birthday': '961222',
    'gender': '男',
    'job': '大学生'
  },
  {
    'id': 2,
    'image': 'http://placeimg.com/64/64/2',
    'name': '田中',
    'birthday': '861222',
    'gender': '男',
    'job': 'システムエンジニア'
  },
  {
    'id': 3,
    'image': 'http://placeimg.com/64/64/3',
    'name': '金',
    'birthday': '901222',
    'gender': '男',
    'job': 'システムエンジニア'
  }
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root2}>
        <Table className={classes.table}>
          <TableHead>
              <TableRow>
                <TableCell>番号</TableCell>
                <TableCell>写真</TableCell>
                <TableCell>名前</TableCell>
                <TableCell>生年月日</TableCell>
                <TableCell>性別</TableCell>
                <TableCell>仕事</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {
              customers.map(c => {
                return (
                  <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
                )
              })
            }
            </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
