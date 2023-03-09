import React from "react";

import { GridEntryBox } from "./box/GridEntryBox";

export type BoxUnit = {
    x: number;
    y: number;
    w: number;
    h: number;
    i: string;
};

class Unit {
    x: number;
    y: number;
    w: number;
    h: number;
    i: string;
    constructor(x: number, y: number, w: number, h: number, i: string) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.i = i.toString();
    }
    make() {
        return { x: this.x, y: this.y, w: this.w, h: this.h, i: this.i };
    }
}
/**
 * i 값이 Grid Box의 key 값 하고 일치해야 한다
 */
const unit01 = new Unit(0, 0, 4, 3, "box_0&type=line").make();
const unit02 = new Unit(4, 0, 4, 3, "box_1&type=bar").make();
const unit03 = new Unit(8, 0, 4, 3, "box_2&type=dounut").make();
const unit04 = new Unit(4, 3, 8, 4, "box_3&type=bar").make();

const initialLayout = [unit01, unit02, unit03, unit04];
console.log("initial", initialLayout);

const GridPage = (): JSX.Element => {
    return (
        <div>
            <GridEntryBox initialLayout={initialLayout} />
        </div>
    );
};

export default GridPage;
