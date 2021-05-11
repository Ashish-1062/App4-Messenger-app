import React from "react";
import "./Header.css";
function Header() {
	return (
		<div>
			<img
				className="logo"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNDTTGo0LneBIULcTA9Lfca2pQQQ1jW4G6Q&usqp=CAU"
				alt=""
			></img>
			<h1 className="heading_Text">Messenger</h1>
		</div>
	);
}

export default Header;
