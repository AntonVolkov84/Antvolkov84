import Link from 'next/link';
import styles from '../styles/users.module.scss';
import MainContainer from '../components/MainContainer';

function users({ users }) {
  return (
    <MainContainer>
      <div className={styles.users}>
        <h1>users</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </MainContainer>
  );
}

export default users;

export async function getStaticProps() {
  const responce = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await responce.json();

  return {
    props: { users },
  };
}
