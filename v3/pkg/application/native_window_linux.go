//go:build linux

package application

/*
#include <gtk/gtk.h>
*/
import "C"
import "unsafe"

// NativeWindow represents a platform-specific window handle for Linux (GtkWindow*)
type NativeWindow = unsafe.Pointer
