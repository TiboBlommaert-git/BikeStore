<?php
/*
namespace modules\customerModule\src;

use Craft;
use craft\web\Controller;

class MyController extends Controller
{
    // Define your controller action to handle the form submission
    public function actionSubmitForm()
    {
        // Check if it's a POST request
        $request = Craft::$app->getRequest();
        if ($request->getIsPost()) {
            // Extract form data from the request
            $name = $request->getBodyParam('name');
            // $email = $request->getBodyParam('email');
            // $phone = $request->getBodyParam('phone');
            // Extract other form fields as needed
 // Extract form data from the request
            $name = $request->getBodyParam('name');
            // $email = $request->getBodyParam('email');
            // $phone = $request->getBodyParam('phone');
 // Extract other form fields as needed

            // Get the current user or create a new one if not logged in
            $user = Craft::$app->getUser()->getIdentity();
            if (!$user) {
                // Create a new user
                $user = new \craft\elements\User();
                // $user->username = $email; // Set the username to the email
                // $user->email = $email;
                $user->firstName = $name;
                // You can set additional user fields here if needed
                // Save the new user
                Craft::$app->getElements()->saveElement($user);
                // Log in the new user
                Craft::$app->getUser()->login($user);
            } else {
                // Update the user's name
                $user->firstName = $name;
                // Save the user
                Craft::$app->getElements()->saveElement($user);
            }
            // Update billing and shipping addresses in Craft Commerce
            $cart = Craft::$app->commerce->carts->getCart();
            if ($cart) {
                // Update billing address
                $cart->setBillingAddress([
                    'fullName' => $name,
                    // 'email' => $email,
                    // 'phone' => $phone,
                    // Add other billing address fields here
                ]);

                // Update shipping address (if applicable)
                $cart->setShippingAddress([
                    // Populate shipping address fields here
                ]);

                // Save the cart to persist the changes
                Craft::$app->commerce->carts->saveCart($cart);

                // Redirect or return a success message
                return $this->redirect('/checkout'); // Redirect to checkout page
            }
        }

        // Handle invalid form submission or display error message
        return $this->renderTemplate('your-template.twig', ['error' => 'Invalid form submission']);
    }
}*/