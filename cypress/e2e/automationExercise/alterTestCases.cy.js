/// <reference types="cypress" />

import Subscription from "../../../pages/home/subcription";
import ContactUs from "../../../pages/contact/contactus";
import ActionButtons from "../../support/buttons/buttons";
import RegisterNew from "../../../pages/login/register";
import UserLogin from "../../../pages/login/users";
import FindAllProducts from "../../../pages/products/findall";
import SearchProducts from "../../../pages/products/search";
import Payment from "../../../pages/cart/payment";
import Item from "../../../pages/cart/addnewitem";
import CartCheckout from "../../../pages/cart/checkout";

describe("Suite Test Case of Automation Exercises", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Test Case 1: Register User", {tags: '@register'},  () => {
    RegisterNew.fillForm();
    RegisterNew.DeleteAccountCreated();
  });

  it("Test Case 2: Login User with correct email and password", {tags: '@login'}, () => {
    ActionButtons.ClickSignup();
    UserLogin.CorrectUser();
  });

  it("Test Case 3: Login User with incorrect email and password", {tags: '@login'}, () => {
    ActionButtons.ClickSignup();
    UserLogin.IncorretUser();
  });

  it("Test Case 4: Logout User",  {tags: '@login'},() => {
    ActionButtons.ClickSignup();
    UserLogin.CorrectUser();
    ActionButtons.ClickLogout();
  });

  it("Test Case 5: Register User with existing email", {tags: '@register'},() => {
    ActionButtons.ClickSignup();
    UserLogin.SignupExistUser();
  });

  it("Test Case 6: Contact Us Form", {tags: '@contact'},() => {
    ActionButtons.ContactUs();
    ContactUs.contactFillForm();
  });

  it("Test Case 8: Verify All Products and product detail page", {tags: ['@login', '@product']},() => {
    ActionButtons.ClickProducts();
    FindAllProducts.FindAll();
  });

  it("Test Case 9: Search Product",{tags: '@product'}, () => {
    ActionButtons.ClickProducts();
    SearchProducts.Search();
  });

  it("Test Case 10: Verify Subscription in home page", {tags: '@subscription'},() => {
    Subscription.NewSubscription();
  });

  it("Test Case 15: Place Order: Register before Checkout", {tags: ['@register','@checkout']},  () => {
    RegisterNew.fillForm();
    Item.AddNewItemCart();
    CartCheckout.Checkout();
    Payment.MethodPayment();
    UserLogin.DeletedAccount();
  });
});
