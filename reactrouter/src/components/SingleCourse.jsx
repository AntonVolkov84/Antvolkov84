import courses from '../data/courses';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const SingleCourse = () => {
  const params = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => course.slug === params.slug);

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' });
    }
  }, [course, navigate]);

  return (
    <div className="course__div">
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h2>{course?.id}</h2>
      <p className="course__text">{course?.text}</p>
      <Link to=".." relative="path">
        All courses
      </Link>
    </div>
  );
};
export default SingleCourse;
