export default interface ICommentData {
    uid: string;
    nick: string;
    commentId: string;
    content: string;
    created: Date;
    updated: Date;
    likes: number;
}