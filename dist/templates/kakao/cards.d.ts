import { Thumbnail, Button, Component } from './common';
export interface IBasicCard {
    title?: string;
    description?: string;
    thumbnail: Thumbnail;
    buttons?: Button[];
}
export interface ICommerceCard {
    thumbnails: Thumbnail[];
    description: string;
    price: number;
    currency: string;
    buttons?: Button[];
    discount?: number;
    discountRate?: number;
    discountPrice?: number;
}
export declare class BasicCard extends Component {
    constructor(fields: IBasicCard, data?: any);
}
export declare class CommerceCard extends Component {
    constructor(fields: ICommerceCard, data?: any);
}
export interface CommerceCarouselData {
    thumbnails: Thumbnail[];
    description: string;
    price: number;
    currency: string;
    buttons?: Button[];
}
export interface BasicCarouselData {
    thumbnail: Thumbnail;
    title: string;
    description: string;
    buttons?: Button[];
}
export declare const createCarouselWithData: (card: CommerceCard | BasicCard, dataList: any, header?: CarouselHeader | undefined) => Carousel;
export declare class CarouselHeader extends Component {
    constructor(title: string, description: string, thumbnail: Thumbnail, data?: any);
}
export declare class Carousel extends Component {
    constructor(items: CommerceCard[] | BasicCard[], header?: CarouselHeader);
}
