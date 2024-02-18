import { useRouter } from 'next/router';
import styles from '../../styles/user.module.scss';
import MainContainer from '../../components/MainContainer';

export default function ({ user }) {
  const { query } = useRouter();

  console.log(user);
  return (
    <MainContainer keywords={user.name}>
      <div className={styles.user}>
        <h1>User with id {query.id}</h1>
        <p>user name {user.name}</p>
      </div>
    </MainContainer>
  );
}
export async function getServerSideProps({ params }) {
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await responce.json();
  return { props: { user } };
}
