fn main() {
    println!("Hello, world!");

    // Add two numbers
    let a = 5;
    let b = 10;
    let sum = add_numbers(a, b);
    println!("The sum of {} and {} is {}", a, b, sum);
}

fn add_numbers(x: i32, y: i32) -> i32 {
    x + y
}
