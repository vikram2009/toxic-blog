#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

fn db_get() {
    let _db_data = "../../src/blogdata/WhatIsJS.json";
    let blog = "?slug=";
    let slug = "WhatIsJS" ; 
    let addr = blog.to_owned() + slug ; 
    println!("     ");
    println!("     ");
    println!("     ");
    println!("res = {}" , addr);
    println!("------>");
    println!("----------->");
    println!("---------------->");
    println!("Fetched data from db_json");
    println!("------>");
    println!("----------->");
    println!("---------------->");
    println!("Started Blog:canvas ");
    
}

fn main() {
      tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
        
        
}
