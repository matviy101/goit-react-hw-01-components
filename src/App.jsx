// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import SnProfile from './Components/SnProfile/SnProfile'
import user from './data/user.json'
import Statistics from './Components/Statistics/Statistics'
import stats from './data/stats.json'
import FriendList from './Components/FriendList/FriendList'
import TransactionHistory from './Components/TransactionHistory/TransactionHistory'
import './App.css'
import friends from './data/friends.json'
import transactions from './data/transactions.json'

function App() {
  return(
  <>
  <SnProfile 
  username = {user.username}
  tag = {user.tag}
  location = {user.location}
  avatar = {user.avatar}
  stats = {user.stats}
  />
  <Statistics stats={stats}/>

  <FriendList friends={friends}/>

  <TransactionHistory items={transactions}/>
  </>)
}

export default App
