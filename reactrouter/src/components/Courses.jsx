import React, { useEffect, useState } from 'react';
import courses from '../data/courses';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

const SORT_KEYS = ['title', 'slug', 'id'];

function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses;
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCourses;
}

const Courses = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState(query.sort);
  console.log(sortKey);
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  );

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.');
      setSortKey();
    }
  }, [sortKey, navigate]);

  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
      <div className="courses">
        {sortedCourses.map((el) => (
          <Link to={el.slug} className="courses__title" key={el.id}>
            {el.title}
          </Link>
        ))}
      </div>
      <button className="courses__btn">Sort bu title</button>
      <button className="courses__btn">Sort bu slug</button>
      <button className="courses__btn">Sort bu id</button>
    </>
  );
};
export default Courses;
