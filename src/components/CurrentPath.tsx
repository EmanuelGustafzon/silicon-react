import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const CurrentPath = () => {
    const location = useLocation();
    const paths = location.pathname.split('/')
  return (
    <div>
        {paths.map(path => (
            <Link to={path}>{path}</Link>
        ))}
    </div>
  )
}

export default CurrentPath