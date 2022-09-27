import { useState } from 'react'
import styled from 'styled-components';




const Container = styled.div`

display: flex;
justify-content:space-around;
align-items: center;
overflow:hidden;
width:auto ;
height:10vh ;
background: rgb(253,181,45, 0.6);
background: radial-gradient(circle, rgba(253,181,45,0.9640231092436975) 81%, rgba(208,211,227,1) 98%);
padding:1rem ;
-webkit-box-shadow: 1px 6px 20px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 6px 20px 0px rgba(0,0,0,0.75);
box-shadow: 1px 6px 20px 0px rgba(0,0,0,0.75);
`
const Logo = styled.h2`
flex:1;
margin-left:2.5rem ;
padding:1rem ;
`
const Searchbar = styled.div`
display: flex;
flex:1;
justify-content:center ;
padding:1rem ;
`
const SearcBox = styled.form`
display: flex;
height:30px ;
width:60% ;
padding:0.4rem ;
align-items: center;
border-radius:20px ;
background: rgba(255, 255, 255, 0.5);
@media (max-width :460px){
  width: 100%;
}
`


const Searcinput = styled.input`
 height:100%;
 background:transparent ;
 outline:none ;
 position: relative;
 width:100% ;
 border-radius:20px ;
 border:none ;
 padding:.5rem ;
 margin-left:10px ;
 font-weight:bold ;
 color:#7c959a;
 font-size:16px ;
`
const SearchButon = styled.button`
display: flex;
 border-radius:50%;
 position: relative;
 background:transparent ;
 align-items: center;
 border: none;
 color:#7c959a ;

`


const Navbar = () => {
	const [filters, setFilters] = useState();

	console.log(filters)
	return (
		<Container>
			<Logo>NONA</Logo>
			<Searchbar>
				<SearcBox>
					<Searcinput placeholder='Search Note' onChange={(e) => setFilters(e.target.value)}></Searcinput>
					<SearchButon><span className="material-icons">
						search
					</span></SearchButon>
				</SearcBox>
			</Searchbar>

		</Container>
	)
}

export default Navbar
