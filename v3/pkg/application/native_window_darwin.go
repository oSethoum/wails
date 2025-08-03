//go:build darwin

package application

/*
#import <Cocoa/Cocoa.h>
*/
import "C"
import "unsafe"

// NativeWindow represents a platform-specific window handle for macOS (NSWindow*)
type NativeWindow = unsafe.Pointer
