//go:build windows

package application

import "unsafe"

// NativeWindow represents a platform-specific window handle for Windows (HWND)
type NativeWindow = unsafe.Pointer
