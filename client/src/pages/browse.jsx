import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'

import  {Slider, TextField} from '@mui/material'
// import { getDataAPI } from '../utils/fetchData'
// import { useSelector, useDispatch } from 'react-redux'
// import  { GLOBALTYPES } from '../redux/actions/globalTypes'
// import { getAllPosts } from '../redux/actions/postAction'

import { FaSearch } from 'react-icons/fa'

// import SearchCard from '../Search/SearchCard'


import Pagination from '../components/Browse/Pagination'

// import Pagination from '../components/Browse/Pagination'

import useQuery from '../hook/useQuery'
import Result from '../components/Browse/Result'
import Sorting from '../components/Browse/Sorting'
import SearchForm from '../components/Browse/SearchForm'


const Browse = () => {

  const searchBottom = [
    {label: 'Employees', path: '/browse/user'},
    {label: 'Jobs', path: '/browse/jobs'},
    {label: 'Contest', path: '/browse/contest'},
  ]

  const jobTypeList = [
    'Part-time Job', 'Fulltime Job', 'Work From Home', 'Company', 'Other'
  ]

  
  const [posts, setPosts] = useState([])
  const [category, setCategory] = useState('')
  const [keyword, setKeyword] = useState('')
  const [skillSearch, setSkillSearch] = useState('')

  const [sliderMax, setSliderMax] = useState(100000)
  const [salaryRange, setSalaryRange] = useState([0, 100000])



  const [limit, setLimit] = useState(5)
  const [page, setPage] =  useState(1)
  const [sort, setSort] = useState('')

  const [checked, setChecked] = useState(false); 
 
  // const { auth, homePosts }  = useSelector(state => state)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   if (postSearch || sort || category || page || limit ) {
  //     getDataAPI(`allposts?title[regex]=${postSearch}&sort=${sort}&${category}&page=${page}&limit=${limit}`)
  //     .then(res => setPosts(res.data.posts) && setCount(res.data.total))
      
  //     .catch(err => {
  //       dispatch({
  //         type: GLOBALTYPES.ALERT, 
  //         payload: {error: err.response.data.msg}})
  //     })

  //   } else {
  //     setPostSearch([])
  //     setSort('')
  //     setCategory('')
  //   }
    
  // }, [postSearch, sort, category, page, limit, dispatch])



  const {data} = useQuery(`/api/allposts?title[regex]=${keyword}&sort=${sort}&${category}&page=${page}&limit=${limit}&salary[gte]=${salaryRange[0]}&salary[lte]=${salaryRange[1]}`)
  useEffect(() => {
    if(data?.posts) setPosts(data.posts)
  }, [data?.posts])


  const totalPages = useMemo(() => {
    if (!data?.total) return  0
    return Math.ceil(data.total / limit)
  }, [data?.total, limit])


  const handlePriceInputChange = (e, type) => {
    let newRange;

    if (type === "lower") {
      newRange = [...salaryRange];
      newRange[0] = Number(e.target.value);

      setSalaryRange(newRange);
    }

    if (type === "upper") {
      newRange = [...salaryRange];
      newRange[1] = Number(e.target.value);

      setSalaryRange(newRange);
    }
  };

  const handleChange = () => { 
    setChecked(!checked); 
  }; 

  const handleClose =  ()  => {

    setCategory('')
    setSkillSearch('')
    setSalaryRange([0, 100000])
  }
  
  
  return (
    <section className="browse-container container">
      <div className="browse">      
        <div className="breadcrumb"></div>
        <div className="search-bar">

          <div className="search-header">
            <h3>Browse</h3>
          </div>

          <div className="search-body" style={{display: "flex"}}>
            <SearchForm postSearch={keyword} setPostSearch={setKeyword}/>
            <Sorting sort={sort} setSort={setSort}/>
          </div>
          
          <div className="search-footer">
            <nav className="navbar navbar-expand-sm">
                  <div className="container"> 
                      <ul className="navbar-nav flex-row mb-0">
                          {   
                              searchBottom.map((link, index) => (
                                  <li className="nav-item" key={index}>
                                      <Link className="nav-link" to={link.path}>
                                          {link.label}
                                      </Link>
                                      
                                  </li>
                              ))
                          }
                      </ul>
                  </div>
              </nav>
          </div>
        </div>
      </div>

      <div className="search-container">
        <div className="search-content-container">
          <div className="search-content">

            <div className="filter-container">
              <div className="filter-card">
                <div className="filter-header" style={{marginBottom: '25px'}}><h4>Filter by:</h4></div>
                <div className="filter-body">
                  <form>
                    <p>Job Type</p>
                    
                    { 
                      jobTypeList.map((jobs, index) => (
                        <div className="form-check" key={index}>
                          <input className="form-check-input" type="checkbox" id="defaultCheck1" 
                          value={`jobType=${jobs}`} onChange={e => handleChange(checked ? setCategory('') : setCategory(e.target.value))} />
                          <label className="form-check-label" htmlFor="defaultCheck1" >
                            {jobs}
                          </label>
                        </div>
                      ))
                    }
                    

                    <hr />
                    <p>Salary rate</p>
                    <div className="salary-filter" style={{padding: "0 10px 25px"}}>
                      <Slider
                        min={0}
                        max={sliderMax}
                        value={salaryRange}
                        valueLabelDisplay="auto"
                        onChange={e => setSalaryRange(e.target.value)}
                        
                      />
                      <div className="hourly-form">
                        <TextField size="small" id="lower" label="Min Price" variant="outlined" type="number" 
                        value={salaryRange[0]}
                        onChange={e => handlePriceInputChange(e, "lower")}/>

                        <TextField size="small" id="upper" label="Max Price" variant="outlined" type="number" 
                        value={salaryRange[1]}
                        onChange={e => handlePriceInputChange(e, "upper")}/>
                      </div>
                      
                    </div>
                    <span style={{cursor: "pointer"}} onClick={handleClose}>Clear All</span>
                    

                    <hr />
                    <p>Skills</p>
                    <input type="text" name="skillSearch" value={skillSearch} id="skillSearch"
                      onChange={e => setSkillSearch(e.target.value.toLowerCase())} />
                      <div className="search_icon" style={{opacity: skillSearch ? 0 : 0.3}}>
                          <span className="material-icons"> <FaSearch /> </span>
                          <span>Enter to Search</span>
                      </div>

                      <div className="close_search" style={{opacity: skillSearch.length === 0 ? 0 : 1}}
                      onClick={handleClose}>
                        &times;
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                      <label className="form-check-label" htmlFor="defaultCheck1">
                        Default checkbox
                      </label>
                    </div>
                    <hr />
                    
                  </form>
                  
                </div>
              </div>
            </div>

            <div className="result-container">
              <div className="result-header">
                <div className="sorting" >
                  <span style={{marginRight: "10px"}}>Limit: </span>
                  <select value={limit} onChange={e => setLimit(e.target.value)} className="form-select">
                      <option defaultValue="5">5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                      
                  </select>

                </div>
                <Pagination totalPages={totalPages} page={page} setPage={setPage} limit={limit}/>
                
              </div>
              
              <div className="result-list" style={{minHeight: "1600px"}}>
                <Result posts={posts} />
              </div>
              
              <Pagination totalPages={totalPages} page={page} setPage={setPage} limit={limit}/>
                            
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Browse