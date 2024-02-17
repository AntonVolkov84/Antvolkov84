import Link from 'next/link';

function index() {
  return (
    <div>
      <div className="navbar">
        <Link className="link" href="">
          Главная
        </Link>
        <Link className="link" href="users">
          Пользователи
        </Link>
      </div>
      <h1>Hello Anton Volkov!</h1>
      <h2>Test git hub</h2>
      <style>
        {`
          .navbar {
            background-color: orange;
            padding: 15px;
          }
          .link, h1, h2{
            margin: 10px;
          }
        `}
      </style>
    </div>
  );
}

export default index;
