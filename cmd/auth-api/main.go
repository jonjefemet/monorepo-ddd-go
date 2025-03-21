package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	fmt.Println("Auth service is starting on :8080...")

	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Auth service OK"))
	})

	log.Fatal(http.ListenAndServe(":8080", nil))
}
