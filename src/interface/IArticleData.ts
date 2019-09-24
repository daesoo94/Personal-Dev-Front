import ICommentData from './ICommentData';

export default interface IArticleData {
    uid: string;
    nick: string;
    articleId: string;
    content: string;
    created: Date;
    updated: Date;
    likes: number;

    title: string;
    pictures: Array<string>;
    comments: Array<ICommentData>;
}