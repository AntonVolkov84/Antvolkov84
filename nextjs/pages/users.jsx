import Link from 'next/link';
import { useState } from 'react';

function users() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Tima' },
    { id: 2, name: 'Tanya' },
  ]);
  return (
    <div>
      <h1>users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default users;
