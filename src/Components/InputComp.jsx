import React, { useEffect, useState } from "react";
import Message from "./Message";
import { Button, FormControl, Input } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import db from "../firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function InputComp() {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);
	const [username, setUsername] = useState("");

	useEffect(() => {
		db.collection("messages")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setMessages(
					snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
				);
			});
	}, []);

	useEffect(() => {
		setUsername(prompt("Enter your name "));
	}, []);

	const sendMsg = (event) => {
		event.preventDefault();
		db.collection("messages").add({
			message: input,
			username: username,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		// setMessages([...messages, { username: username, text: input }]);
		setInput("");
	};
	return (
		<div>
			<form className="app__form">
				<FormControl className="app__formControl">
					<Input
						className="app__input"
						placeholder="Enter Message"
						value={input}
						onChange={(event) => {
							setInput(event.target.value);
						}}
					/>
					<Button
						disabled={!input}
						variant="contained"
						color="primary"
						type="submit"
						size="Medium"
						onClick={sendMsg}
					>
						Send
						<SendIcon style={{ paddingLeft: 5, fontSize: "Medium" }} />
					</Button>
				</FormControl>
			</form>

			<FlipMove>
				{messages.map(({ id, message }) => (
					<Message key={id} username={username} message={message} />
				))}
			</FlipMove>
		</div>
	);
}

export default InputComp;
