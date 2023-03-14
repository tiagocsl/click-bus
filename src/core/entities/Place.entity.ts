import { v4 as uuidv4 } from 'uuid';

import { IPlaceProps } from 'core/interfaces/Place-props.interface';
import { IPlace } from 'core/interfaces/Place.interface';

export class Place {
    private _id: string;
    private _name: string;
    private _slug: string;
    private _city: string;
    private _state: string;
    private _created_at: Date;
    private _updated_at: Date;

    constructor(props: IPlace) {
        // this validation is used for orms
        if (!props) {
            this._id = '';
            this._name = '';
            this._slug = '';
            this._city = '';
            this._state = '';
            this._created_at = new Date();
            this._updated_at = new Date();
            return;
        }

        this._id = props.id;
        this._name = props.name;
        this._slug = props.slug;
        this._city = props.city;
        this._state = props.state;
        this._created_at = props.created_at;
        this._updated_at = props.updated_at;
    }

    static create(placeProps: IPlaceProps) {
        const date = new Date();
        return new Place({
            ...placeProps,
            id: uuidv4(),
            created_at: date,
            updated_at: date,
        });
    }

    public get id(): string {
        return this._id;
    }

    private set id(value: string) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
        this._updated_at = new Date();
    }

    public get slug(): string {
        return this._slug;
    }

    public set slug(value: string) {
        this._slug = value;
        this._updated_at = new Date();
    }

    public get city(): string {
        return this._city;
    }

    public set city(value: string) {
        this._city = value;
        this._updated_at = new Date();
    }

    public get state(): string {
        return this._state;
    }

    public set state(value: string) {
        this._state = value;
        this._updated_at = new Date();
    }

    public get created_at(): Date {
        return this._created_at;
    }

    private set created_at(value: Date) {
        this._created_at = value;
    }

    public get updated_at(): Date {
        return this._updated_at;
    }

    private set updated_at(value: Date) {
        this._updated_at = value;
    }
}
