import { Page, Layout, Text, Card, BlockStack } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function WishlistApp() {
  return (
    <Page>
      <TitleBar title="Wishlist App" />

      <BlockStack gap="500">
        <Layout>
          {/* Setup the App Section */}
          <Layout.Section>
            <Card title="Setup the Wishlist App" sectioned>
              <BlockStack gap="200">
                <Text variant="headingMd" as="h2">
                  How to Set Up and Use the Wishlist App
                </Text>
                <Text variant="bodyMd" as="p">
                  The Wishlist app comes with two key features, available as
                  extensions to help you add wishlist functionality to your
                  store with ease. Follow the steps below to set it up:
                </Text>

                <Text variant="headingSm" as="h3">
                  1. Wishlist Button Extension
                </Text>
                <Text variant="bodyMd" as="p">
                  Use the <strong>Wishlist Button</strong> extension to add a
                  wishlist button anywhere in your store, whether it's on
                  product pages, collection pages, or even in promotional
                  banners. Simply drag and drop the button where needed. When a
                  customer clicks the button, the product is added to their
                  wishlist, which is stored locally on their device using{" "}
                  <strong>local storage</strong>. This allows users to maintain
                  their wishlist even if they leave the site and return later.
                </Text>

                <Text variant="headingSm" as="h3">
                  2. Wishlist Page Extension
                </Text>
                <Text variant="bodyMd" as="p">
                  The <strong>Wishlist Page</strong> extension allows you to
                  create a dedicated page that displays all products added to
                  the customer's wishlist. This page dynamically retrieves data
                  from local storage to show the wishlist items, making it
                  easily accessible for customers to view or modify their saved
                  products.
                </Text>

                <Text variant="headingMd" as="h3">
                  Local Storage for Data Handling
                </Text>
                <Text variant="bodyMd" as="p">
                  We use <strong>local storage</strong> to store and manage the
                  wishlist data. Local storage allows for a quick and seamless
                  user experience, as customers' wishlisted items are stored
                  directly on their device. This ensures that users' wishlist
                  persists even if they refresh the page, close the browser, or
                  revisit the site after some time.
                </Text>

                <Text variant="bodyMd" as="p">
                  The app will automatically retrieve the wishlist data from
                  local storage and display it on the Wishlist Page whenever the
                  customer visits it. This approach eliminates the need for
                  additional backend server calls, making the experience faster
                  and more reliable.
                </Text>

                <Text variant="headingSm" as="h3">
                  Benefits of Using Our Wishlist App
                </Text>
                <Text variant="bodyMd" as="p">
                  - <strong>Seamless Integration:</strong> The app integrates
                  smoothly with your store using Shopify’s extensions.
                  <br />
                  - <strong>Flexible Customization:</strong> Easily place the
                  wishlist button anywhere in your store, from product pages to
                  sidebars or headers.
                  <br />
                  - <strong>Optimized Performance:</strong> Using local storage
                  reduces the need for server requests, ensuring fast page loads
                  and a responsive UI.
                  <br />
                  - <strong>Improved User Experience:</strong> Customers can
                  view, manage, and revisit their wishlists without needing to
                  log in.
                </Text>
              </BlockStack>
            </Card>
          </Layout.Section>

          {/* Guidance Section */}
          <Layout.Section>
            <Card title="Guidance" sectioned>
              <BlockStack gap="200">
                <Text variant="headingMd" as="h3">
                  How to Use the Wishlist App
                </Text>
                <Text variant="bodyMd" as="p">
                  Adding products to the wishlist is easy. Once the button is
                  placed in your store, customers simply click it to add
                  products to their wishlist. They can then view their wishlist
                  from the dedicated wishlist page.
                </Text>
              </BlockStack>
            </Card>
          </Layout.Section>

          {/* Contact Section */}
          <Layout.Section>
            <Card title="Contact Us" sectioned>
              <BlockStack gap="200">
                <Text variant="headingMd" as="h3">
                  Contact Information
                </Text>
                <Text variant="bodyMd">
                  Email: support@yourwishlistapp.com
                </Text>
                <Text variant="bodyMd">Phone: +123456789</Text>
              </BlockStack>
            </Card>
          </Layout.Section>

          {/* About Us Section */}
          <Layout.Section>
            <Card title="About Us" sectioned>
              <BlockStack gap="200">
                <Text variant="headingMd" as="h3">
                  About Our Wishlist App
                </Text>
                <Text variant="bodyMd">
                  Our Wishlist App was designed to improve the shopping
                  experience by providing an easy way for customers to save
                  their favorite products. With its easy setup, flexibility, and
                  fast performance, our app enhances customer engagement and
                  retention.
                </Text>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}
