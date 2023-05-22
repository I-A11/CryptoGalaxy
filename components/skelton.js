import styles from "./skelton.module.css";
const Skeleton = ({ className }) => {
  return (
    <div className={styles.skeletonAnimation}>
      <div className={styles.skeletonContainer}></div>
    </div>
  );
};

export default Skeleton;
