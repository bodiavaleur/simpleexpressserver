import { Request, Response } from "express";

export type ValueOf<T> = T[keyof T];

export type RouteHandler = (req: Request, res: Response) => void;
