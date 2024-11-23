import Card from './card/Card';
import styles from './page.module.css';
import RightBar from './rightbar/Rightbar';
import Transaction from './transaction/Transaction';

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div> 
        <Transaction />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div> 
  );
}

export default Dashboard;