import {ChatCard, ChatForm, MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced';
import './ChatsPage.css';
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '30a86abc-9ebd-4487-9e5d-0e8c6182ee19',
        props.user.username,
        props.user.secret
    );

    return (
    <div className="parent-container">
        <MultiChatSocket className="multi-chat-socket" {...chatProps} />
        <MultiChatWindow className="multi-chat-window"  {...chatProps} />
    </div>
  );
};

export default ChatsPage;