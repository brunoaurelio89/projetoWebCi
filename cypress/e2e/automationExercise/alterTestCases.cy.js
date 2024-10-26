/// <reference types="cypress" />

import Subscription from '../../../pages/home/subcription'
import ContactUs from '../../../pages/contact/contactus'
import ActionButtons from '../../support/buttons/buttons'
import RegisterNew from '../../../pages/login/register'
import UserLogin from '../../../pages/login/users'
import FindAllProducts from '../../../pages/products/findall'
import SearchProducts from '../../../pages/products/search'
import Payment from '../../../pages/cart/payment'
import Item from '../../../pages/cart/addnewitem'
import CartCheckout from '../../../pages/cart/checkout'



describe('Suite Test Case of Automation Exercises', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Test Case 1: Register User', () => {
        RegisterNew.fillForm()
        RegisterNew.DeleteAccountCreated()  
    });

    it('Test Case 2: Login User with correct email and password', () => {
        ActionButtons.ClickSignup()
        UserLogin.CorrectUser()
    });

    it('Test Case 3: Login User with incorrect email and password', () => {
        ActionButtons.ClickSignup()
        UserLogin.IncorretUser()
    });

    it('Test Case 4: Logout User', () => {
        ActionButtons.ClickSignup()
        UserLogin.CorrectUser()
        ActionButtons.ClickLogout()
    });

    it('Test Case 5: Register User with existing email', () => {
        ActionButtons.ClickSignup()
        UserLogin.SignupExistUser()
    });

    it('Test Case 6: Contact Us Form', () => {
        ActionButtons.ContactUs()
        ContactUs.contactFillForm()        
    });

    it('Test Case 8: Verify All Products and product detail page', () => {
        ActionButtons.ClickProducts()
        FindAllProducts.FindAll()
    });

    it('Test Case 9: Search Product', () => {
        ActionButtons.ClickProducts()
        SearchProducts.Search()
    });

    it('Test Case 10: Verify Subscription in home page', () => {
        Subscription.NewSubscription()
    });

    it('Test Case 15: Place Order: Register before Checkout', () => {
        RegisterNew.fillForm()
        Item.AddNewItemCart()
        CartCheckout.Checkout()
        Payment.MethodPayment()
        UserLogin.DeletedAccount()
    });
});
