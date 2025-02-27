export interface Size {
    /** The width of a rectangular area. */
    Width: number;
    /** The height of a rectangular area. */
    Height: number;
}
export interface Rect {
    /** The X coordinate of the origin. */
    X: number;
    /** The Y coordinate of the origin. */
    Y: number;
    /** The width of the rectangle. */
    Width: number;
    /** The height of the rectangle. */
    Height: number;
}
export interface Screen {
    /** Unique identifier for the screen. */
    ID: string;
    /** Human-readable name of the screen. */
    Name: string;
    /** The scale factor of the screen (DPI/96). 1 = standard DPI, 2 = HiDPI (Retina), etc. */
    ScaleFactor: number;
    /** The X coordinate of the screen. */
    X: number;
    /** The Y coordinate of the screen. */
    Y: number;
    /** Contains the width and height of the screen. */
    Size: Size;
    /** Contains the bounds of the screen in terms of X, Y, Width, and Height. */
    Bounds: Rect;
    /** Contains the physical bounds of the screen in terms of X, Y, Width, and Height (before scaling). */
    PhysicalBounds: Rect;
    /** Contains the area of the screen that is actually usable (excluding taskbar and other system UI). */
    WorkArea: Rect;
    /** Contains the physical WorkArea of the screen (before scaling). */
    PhysicalWorkArea: Rect;
    /** True if this is the primary monitor selected by the user in the operating system. */
    IsPrimary: boolean;
    /** The rotation of the screen. */
    Rotation: number;
}
/**
 * Gets all screens.
 *
 * @returns A promise that resolves to an array of Screen objects.
 */
export declare function GetAll(): Promise<Screen[]>;
/**
 * Gets the primary screen.
 *
 * @returns A promise that resolves to the primary screen.
 */
export declare function GetPrimary(): Promise<Screen>;
/**
 * Gets the current active screen.
 *
 * @returns A promise that resolves with the current active screen.
 */
export declare function GetCurrent(): Promise<Screen>;
