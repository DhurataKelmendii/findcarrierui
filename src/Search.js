import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { Container, Button } from "reactstrap";
import UniversitiesList from "../University/UniversitiesList";
import Home from "../Home";

function Search() {
   
    const history = useHistory();

    const Search = () => {
    const token = localStorage.getItem('token');
    const [searchTerm1, setSearchTerm1] = useState('');
    const [searchTerm2, setSearchTerm2] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    }

    const handleSearch = () => {
      axios.post('/api/search', { searchTerm1, searchTerm2 })
          .then(response => {
          const searchResults = response.data;
          setSearchResults(searchResults);
          })
          .catch(error => {
          console.error(error);
          });
    };

    useEffect(() => {
        getData();
      }, []);
  
    return (
    <Router>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            <Link to={"/App"} className="linki">
              Find your Carrier
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  User
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-link">
                    <Link to={"/UsersList"} className="link">
                      Users List
                    </Link>
                  </li>
                </ul>
              </li>
              
            </ul>
            <ul className="nav justify-content-end">
              <li className="nav-item ">
                {token ? (
                  <p onClick={() => logOut()} className="nav-link">
                    Log out
                  </p>
                ) : (
                  <Link to={"/LoginForm"} className="nav-link">
                    Sign in
                  </Link>
                )}
              </li>
              <li className="nav-item ">
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <Container className="Search">
      <div className="search-bar">
        <input
            type="text"
            placeholder="Search term 1"
            value={searchTerm1}
            onChange={e => setSearchTerm1(e.target.value)}
        />
        <input
            type="text"
            placeholder="Search term 2"
            value={searchTerm2}
            onChange={e => setSearchTerm2(e.target.value)}
        />
            <button onClick={handleSearch}>Search</button>
        </div>
      </Container>
      <br/>
      <Container className="Footer">
      <div className="row">
       <div className="col-lg-12 Footer">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-itemm">
              <p>Copyright © DhurataKelmendi</p>
            </li>
          </ul>
        </div>
      </div>
      </Container>
      

      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route path="/UsersList" component={UsersList} />
        <Route path="/UniversitiesList" component={UniversitiesList} />
      </Switch>
    </Router>

    );
  };

export default Search;
