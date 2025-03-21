package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	fmt.Println("Backoffice service is starting on :8080...")

	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Backoffice service OK"))
	})

	log.Fatal(http.ListenAndServe(":8080", nil))
}
