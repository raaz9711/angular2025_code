# Angular Pipes - Complete Guide

## ✅ Built-in Angular Pipes

### **Text Transformation**
- **`uppercase`** – Converts text to uppercase.
- **`lowercase`** – Converts text to lowercase.
- **`titlecase`** – Capitalizes the first letter of each word.

### **Date & Time**
- **`date`** – Formats dates according to locale.

### **Numbers & Currency**
- **`number`** – Formats numeric values.
- **`percent`** – Formats a number as a percentage.
- **`currency`** – Formats a number as a currency.

### **JSON & Debugging**
- **`json`** – Converts an object to a JSON string.

### **Asynchronous Data**
- **`async`** – Unwraps values from Promises or Observables.

### **Internationalization**
- **`i18nSelect`** – Selects text based on a mapping object.
- **`i18nPlural`** – Handles pluralization based on locale rules.

### **Key/Value & Iteration**
- **`keyvalue`** – Converts an object/map to an array of key-value pairs.

### **String Manipulation**
- **`slice`** – Extracts a portion of an array or string.

---

## ✅ Custom Pipes
Custom pipes are user-defined for various purposes:
- **Filtering** – e.g., filter list by keyword
- **Sorting** – e.g., sort array by property
- **Formatting** – e.g., phone number, custom currency
- **Data Transformation** – e.g., masking sensitive data

---

### ✅ Angular Version Notes
- Pipes above are valid up to **Angular 17**.
- New Angular versions may add more pipes.

---

### 📌 Usage Example
```html
<!-- Uppercase Pipe -->
<p>{{ 'hello world' | uppercase }}</p>

<!-- Date Pipe -->
<p>{{ today | date:'fullDate' }}</p>

<!-- Async Pipe -->
<p>{{ observableData | async }}</p>


# 🌟 Angular 17+ Pipes - Complete Guide with Examples

Angular 17 introduced **new utility pipes** for arrays and numeric operations, making templates more powerful without writing custom logic in the component.

---

## ✅ New Pipes in Angular 17

### **1. `first` Pipe**
- Returns the **first element** of an array.

Example:
```html
<p>{{ [10, 20, 30] | first }}</p>
<!-- Output: 10 -->
<p>{{ [10, 20, 30] | last }}</p>
<!-- Output: 30 -->
<p>{{ [5, 10, 2, 8] | min }}</p>
<!-- Output: 2 -->
<p>{{ [5, 10, 2, 8] | max }}</p>
<!-- Output: 10 -->
<p>{{ [1, 2, 3, 4] | sum }}</p>
<!-- Output: 10 -->
<p>{{ ['Angular', 'Pipes', '17'] | join:', ' }}</p>
<!-- Output: Angular, Pipes, 17 -->


# Angular Data Sharing with BehaviorSubject

## 1. What is BehaviorSubject?

- `BehaviorSubject` is a special type of **RxJS Subject** that **stores the latest emitted value** and sends it to new subscribers immediately.
- Unlike a regular `Subject` (which only emits values to subscribers who are already listening), a `BehaviorSubject` **remembers the last emitted value** and instantly provides it to any new subscriber.

### **Example**
```ts
import { BehaviorSubject } from 'rxjs';

const subject = new BehaviorSubject<number>(0);  // initial value = 0

subject.subscribe(val => console.log('Subscriber A:', val));

subject.next(1);  // Subscriber A: 1
subject.next(2);  // Subscriber A: 2

subject.subscribe(val => console.log('Subscriber B:', val)); 
// Subscriber B immediately gets the last value -> 2

subject.next(3); 
// Both subscribers get 3 -> Subscriber A: 3, Subscriber B: 3

# Angular Services: HTTP & Component Data Sharing

This guide explains how to:
1. Use Angular **HttpClient** for API calls (GET, POST, PUT, PATCH, DELETE).
2. Share data between components using **BehaviorSubject**.

---

## **1. HttpClient in Angular**

`HttpClient` is used to interact with REST APIs. It returns data as **Observables**, which can be subscribed to in components.

### **Setup**
Add `HttpClientModule` in your `app.module.ts`:
```ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule]
})
export class AppModule {}
