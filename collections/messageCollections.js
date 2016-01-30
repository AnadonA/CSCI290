messageCollection		= new Mongo.Collection("messages");
messageEditCollection	= new Mongo.Collection("messageEdits");

/*
--MessageCollection Schema--
_ID		: Autmatically created & populated by MongoDB. The unique identifier of the document
authorID	: The _ID value of the user who created the message content.
dateCreated	: The date that the user created the message.
parentID	: Used to track discussions. Will only exist if this message is a response to another message.
messageHeading	: A short text title of the message.
messageText	: The text of the message
messageType	: The type of the message (general, safety, etc.)
edits[]		: An array of edits _IDs that have been applied to this message.


--messageEditCollection Schema--
_ID			:
authorID		:
dateModified		:
messageID		:
messageHeadingOld	:
messageTextOld		:

*/
