import styles from "./topBar.module.css";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <Link href="/" className={styles.움막집링크}>
        <h1 className={styles.움막집버튼}>움막집</h1>
      </Link>
      <div className={styles.centerMenu}>
        <Link href="/register" className={styles.회원가입링크}>
          <h2 className={styles.회원가입버튼}>회원가입</h2>
        </Link>
        <Link href="/post/list" className={styles.게시판링크}>
          <h2 className={styles.게시판버튼}>게시판</h2>
        </Link>
        <div></div>
      </div>
    </div>
  );
}
