//rfce
import Script from "next/script";
import Headweb from "./components/head";
import Link from "next/link";
function termsprivacy() {
  return (
    <section id="termsprivacy" className="pt-10  pb-0">
      <Headweb />
      <div className="container pb-0 ">
        <div className="flex flex-wrap ">
          <div className="p-4 w-full  px-4  ">
            <h3 className=" w-full mb-4 text-center sm:text-xl md:text-xl  font-bold text-dark dark:text-secondary lg:text-2xl">
              Privacy Policy <br />
              (Last updated 20 October 2019)
            </h3>
            <div className="flex justify-end mb-4">
              <div className="flex ">
                <span className="mr-2  text-sm text-primary  dark:text-secondary">
                  Indonesia
                </span>
                <input
                  type="checkbox"
                  className="hidden"
                  id="dark-toggle-term-privacy"
                />
                <label htmlFor="dark-toggle-term-privacy">
                  <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-primary p-1">
                    <div className="toggle-circle h-4 w-4 rounded-full bg-secondary transition duration-300 ease-in-out"></div>
                  </div>
                </label>
                <span className="ml-2  text-sm text-primary  dark:text-secondary">
                  English
                </span>
              </div>
            </div>

            {/* // start - privacy english */}
            <div
              id="p-term-privacy-eglsh"
              className="border-2 px-8 py-6 hidden  max-h-[400px]  text-dark dark:text-secondary border-slate-300 shadow-lg rounded-md overflow-y-auto  w-full"
            >
              PT Timkado Sejahtera Indonesia, hereafter &quot;TSI&quot;, takes
              data privacy seriously. This privacy policy explains who we are,
              how we collect, share and use Personal Information, and how you
              can exercise your privacy rights.
              <br />
              <br />
              We recommend that you read this privacy policy in full to ensure
              you are fully informed. However, to make it easier for you to
              review the parts of this privacy policy that apply to you, we have
              divided up the document into sections that are specifically
              applicable to Members (Section 2), Contacts (Section 3), and
              Visitors(Section 4). Sections 1 and 5 are applicable to everyone.
              <br />
              <br />
              If you have any questions or concerns about our use of your
              Personal Information, then please contact us using the contact
              details provided at the end of Section 5.
              <br />
              <br />
              <h4 className="font-bold text-xl">1. The Basics</h4>
              <br />
              <span className="font-bold">A. About Us</span>
              <br />
              DAISI is an online marketing platform (the &quot;Services&quot;)
              licensed by PT Timkado Sejahtera Indonesia for sale and
              distribution in the country of Indonesia (&quot;we&quot;,
              &quot;us&quot;, &quot;our&quot;, and &quot;TSI&quot;).
              <br />
              <br />
              The Services enable our Members to, among other things, send and
              manage messaging campaigns or serve advertisements using email,
              SMS, and applications such as Whatsapp, LINE, and Facebook
              Messenger. We also provide other related services, such as data
              analytics to improve the effectiveness of these marketing
              campaigns.
              <br />
              <br />
              <span className="font-bold">B. Key Terms</span> <br />
              In this privacy policy, these terms have the following meanings:
              <br /> <br />
              &quot;Audience&quot; is the person or persons that you want to
              read your message. Audiences may be defined by one or more
              distribution lists.
              <br /> <br />
              &quot;Contact&quot; is a person a Member may contact through our
              Services. In other words, a Contact is anyone on a Member&lsquo;s
              Distribution List or about whom a Member has given us information.
              For example, if you are a Member, a subscriber to your email
              marketing campaigns would be considered a Contact.
              <br /> <br />
              &quot;Distribution List&quot; is a list of Contacts a Member may
              upload or manage on our platform and all associated information
              related to those Contacts (for example, email addresses). <br />
              <br />
              &quot;Member&quot; means any person or entity that is registered
              with us to use the Services. <br /> <br />
              &quot;Personal Information&quot; means any information that
              identifies or can be used to identify a Member, a Contact, or a
              Visitor, directly or indirectly. Examples of Personal Information
              include, but are not limited to, first and last name, date of
              birth, email address, gender, occupation, or other demographic
              information.
              <br /> <br />
              &quot;Website(s)&quot; means any website(s) we own and operate
              (such as daisi.id) or any web pages, interactive features,
              applications, widgets, blogs, social networks, social network
              &quot;tabs,&quot; or other online, mobile, or wireless offerings
              that post a link to this privacy policy.
              <br /> <br />
              &quot;Visitor&quot; means any person who visits any of our
              Websites. <br />
              <br />
              &quot;you&quot; and &quot;your&quot; means, depending on the
              context, either a Member, a Contact, or a Visitor.
              <br />
              <br />
              <h4 className="font-bold text-xl">2. Privacy for Members</h4>
              <br />
              This section applies to the Personal Information we collect and
              process from a Member or potential Member through the provision of
              the Services. In this section, &quot;you&quot; and
              &quot;your&quot; refer to Members and potential Members.
              <br />
              <br />
              <span className="font-bold">A. Information We Collect</span>
              <br />
              The Personal Information that we may collect broadly falls into
              the following categories:
              <br />
              <br />
              (i) Information you provide to us: In the course of engaging with
              our Services, you may provide Personal Information about you and
              your Contacts. Personal Information is often, but not exclusively,
              provided to us when you sign up for and use the Services, consult
              with our customer service team, send us an email, integrate the
              Services with another website or service (for example, when you
              choose to connect your e-commerce account with TSI), or
              communicate with us in any other way.
              <br />
              <br />
              We will let you know prior to collection whether the provision of
              Personal Information we are collecting is compulsory or if it may
              be provided on a voluntary basis and the consequences, if any, of
              not providing the information. By giving us this information, you
              agree to this information being collected, used and disclosed as
              described in this privacy policy.
              <br />
              <br />
              This information may include:
              <br />
              <ul
                role="list"
                className="marker:text-dark dark:marker:text-secondary dark:text-secondary mr-4 mt-4 list-disc pl-5  space-y-3 text-dark"
              >
                <li>
                  Registration information: You need a TSI account to use the
                  Services as a Member. When you register for an account, you
                  will be asked to provide certain basic information, such as
                  your name, email address, username, password, company name,
                  occupation, location, and phone number (for example, if you
                  are using two-factor authentication).
                </li>
                <li>
                  Billing and communications information: If you purchase our
                  Services, you may also need to provide us with payment and
                  billing information, such as your credit card details and
                  billing address. TSI will also maintain a record of your
                  billing transactions and purchases, and any communications and
                  responses.
                </li>
                <li>
                  Information we process on your behalf: In order to send a
                  messaging campaign or use certain features in your account,
                  you need to upload a Distribution List that provides us
                  information about your Contacts, such as their names and email
                  addresses. We use and process this information to provide the
                  Services in accordance with your instructions.
                </li>
              </ul>
              <br />
              (ii) Information we collect automatically: When you use the
              Services, we may automatically collect certain information about
              your device and usage of the Services. We use cookies and other
              tracking technologies to collect some of this information. Our use
              of cookies and other tracking technologies is discussed more
              below.
              <br />
              <br />
              This information may include:
              <br />
              <br />
              <ul
                role="list"
                className="marker:text-dark dark:marker:text-secondary dark:text-secondary list-disc pl-5 space-y-3 text-dark"
              >
                <li>
                  Device information: We collect information about the device
                  and applications you use to access the Services, such as your
                  IP address, your operating system, your browser ID, and other
                  information about your system and connection.
                </li>
                <li>
                  Log data: Our web servers keep log files that record data each
                  time a device accesses those servers and those log files
                  contain data about the nature of each access, including
                  originating IP addresses. We may also access metadata and
                  other information associated with files that you upload into
                  our Services.
                </li>
                <li>
                  Product usage data: We collect usage data about you whenever
                  you interact with our Services, which may include the dates
                  and times you access the Services and your browsing activities
                  (such as what portions of the Services are used). We also
                  collect information regarding the performance of the Services,
                  including metrics related to the deliverability of emails and
                  other communications you send through the Services. This
                  information allows us to improve the content and operation of
                  the Services and facilitate research and analysis of the
                  Services.
                </li>
              </ul>
              <br />
              (iii) Information we collect from other sources: From time to
              time, we may obtain information about you or your Contacts from
              third-party sources, such as public databases, social media
              platforms, third-party data providers and our joint marketing
              partners. We take steps to ensure that such third parties are
              legally or contractually permitted to disclose such information to
              us.
              <br />
              <br />
              <ul
                role="list"
                className="marker:text-dark dark:marker:text-secondary dark:text-secondary list-disc pl-5 space-y-3 text-dark"
              >
                <li>
                  Examples of the information we receive from other sources
                  include demographic information (such as age and gender),
                  device information (such as IP addresses), location (such as
                  city and state), and online behavioral data (such as
                  information about use of social media websites, page view
                  information and search results and links). We use this
                  information, alone or in combination with other information
                  (including Personal Information) we collect, to enhance our
                  ability to provide relevant marketing and content to you and
                  to develop and provide you with more relevant products,
                  features, and services.
                </li>
              </ul>
              <br />
              (iv) Information from the use of our applications: When you use
              our applications, we may collect certain device and usage-related
              information in addition to information described elsewhere in this
              privacy policy.
              <br />
              <br />
              <ul
                role="list"
                className="marker:text-dark dark:marker:text-secondary dark:text-secondary list-disc pl-5 space-y-3 text-dark"
              >
                <li>
                  Device information: We may collect information about the type
                  of device and operating system you use. We do not ask for,
                  access, or track any location-based information from your
                  mobile device at any time while downloading or using our
                  mobile apps or Services.
                </li>
                <li>
                  Product usage data: We may use analytics software (such as
                  Google Analytics) to better understand how people use our
                  application. We may collect information about how often you
                  use the application and other performance data.
                </li>
              </ul>
              <br />
              <span className="font-bold">B. Use of Personal Information</span>
              <br />
              We may use the Personal Information we collect through the
              Services or other sources for a range of reasons, including:
              <br />
              <br />
              <ul
                role="list"
                className="marker:text-dark list-disc dark:marker:text-secondary dark:text-secondary pl-5 space-y-3 text-dark"
              >
                <li>
                  To bill and collect money owed to us by you. This includes
                  sending you emails, invoices, receipts, notices of
                  delinquency, and alerting you if we need a different credit
                  card number. We use third parties for secure credit card
                  transaction processing, and those third parties collect
                  billing information to process your orders and credit card
                  payments. To learn more about the steps we take to safeguard
                  that data, see the &quot;Our Security&quot; section of this
                  privacy policy.
                </li>
                <li>
                  To send you system alert messages. For example, we may inform
                  you about temporary or permanent changes to our Services, such
                  as planned outages, or send you account, security or
                  compliance notifications, such as new features, version
                  updates, releases, abuse warnings, and changes to this privacy
                  policy.
                </li>
                <li>
                  To communicate with you about your account and provide
                  customer support. For example, if you use our mobile apps, we
                  may ask you if you want to receive push notifications about
                  activity in your account. If you have opted into these push
                  notifications and no longer want to receive them, you may turn
                  them off through your operating system.
                </li>
                <li>
                  To facilitate or enable any checks as we may in our discretion
                  consider necessary before we register you as a Member,
                  including any know-your-customer (&quot;KYC&quot;) processes;
                </li>
                <li>
                  To enforce compliance with our Terms of Use and applicable
                  law, and to protect the rights and safety of our Members and
                  third parties, as well as our own. This may include developing
                  tools and algorithms that help us prevent violations. For
                  example, sometimes we review the content of our Members’ email
                  campaigns to make sure they comply with our Terms of Use. To
                  improve that process, we have software that helps us find
                  email campaigns that may violate our Terms of Use. Our
                  employees or independent contractors may review those
                  particular email campaigns. This benefits all Members who
                  comply with our Terms of Use because it reduces the amount of
                  spam being sent through our servers and helps us maintain high
                  deliverability. Email and messaging services such as Whatsapp
                  not necessarily built for confidential information. Please do
                  not use TSI to send confidential information.
                </li>
                <li>
                  To meet legal requirements, including complying with court
                  orders, valid discovery requests, valid subpoenas, and other
                  appropriate legal mechanisms.
                </li>
                <li>
                  To provide information to representatives and advisors,
                  including attorneys and accountants, to help us comply with
                  legal, accounting, or security requirements.
                </li>
                <li>
                  To prosecute and defend a court, arbitration, or similar legal
                  proceeding.
                </li>
                <li>
                  To respond to lawful requests by public authorities, including
                  to meet national security or law enforcement requirements.
                </li>
                <li>
                  To provide, support and improve the Services. For example,
                  this may include sharing your or your Contacts’ information
                  with third parties in order to provide and support our
                  Services or to make certain features of the Services available
                  to you. When we share Personal Information with third parties,
                  we take steps to protect your information by requiring these
                  third parties to enter into a contract with us that requires
                  them to use the Personal Information we transfer to them in a
                  manner that is consistent with this privacy policy and
                  applicable privacy laws.
                </li>
                <li>
                  To provide suggestions to you. This includes adding features
                  that compare Members’ email campaigns, using data to suggest
                  other publishers your Contacts may be interested in, or using
                  data to suggest products or services that you may be
                  interested in or that may be relevant to you or your Contacts.
                  Some of these suggestions are generated by use of our data
                  analytics projects, which are described below.
                </li>
                <li>
                  For our data analytics projects. Our data analytics projects
                  use data from TSI accounts, including Personal Information of
                  Contacts, to provide and improve the Services. We use
                  information like your sending habits and your Contacts’
                  details, so we can make more informed predictions, decisions,
                  and products for our Members. You or your Contact can opt out
                  of data analytics projects at any time by emailing us at{" "}
                  <a
                    className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                    href="mailto:legal@timkado.id"
                  >
                    legal@timkado.id
                  </a>
                  . For example, we use data from TSI accounts to enable product
                  recommendation, audience segmentation, and predicted
                  demographics features for our Members. We will act as a data
                  controller to process data for our data analytics projects in
                  reliance on our legitimate business interests of improving and
                  enhancing our products and services for our Members. As
                  always, we take the privacy of Personal Information seriously,
                  and will continue to implement appropriate safeguards to
                  protect this Personal Information from misuse or unauthorized
                  disclosure.
                </li>
                <li>
                  Combined information. We may combine Personal Information with
                  other information we collect or obtain about you (such as
                  information we source from our third-party partners) to serve
                  you specifically, such as to deliver a product or service
                  according to your preferences or restrictions, or for
                  advertising or targeting purposes in accordance with this
                  privacy policy. When we combine Personal Information with
                  other information in this way, we treat it as, and apply all
                  of the safeguards in this privacy policy applicable to,
                  Personal Information.
                </li>
                <li>
                  To enable your use of the integrations and plugins you choose
                  to connect to your TSI account. For instance, if you choose to
                  connect a Google integration to your TSI account, we&lsquo;ll
                  ask you to grant us permission to view and/or download, as
                  applicable, your Google Sheets, Google Contacts, Google
                  Analytics and Google Drive. This allows us to configure your
                  integration(s) in accordance with your preferences. For
                  example, if you wanted to use the Google Contacts integration
                  to share the templates in your TSI account with contacts in
                  your Google address book, we would need to access your Google
                  Contacts to share the templates.
                </li>
                <li>
                  Other purposes. To carry out other legitimate business
                  purposes, as well as other lawful purposes about which we will
                  notify you.
                </li>
              </ul>
              <br />
              <span className="font-bold">
                C. Cookies and Tracking Technologies
              </span>
              <br />
              We and our partners may use various technologies to collect and
              store information when you use our Services, and this may include
              using cookies and similar tracking technologies, such as pixels
              and web beacons. For example, we use web beacons in the emails we
              send on your behalf. These web beacons track certain behavior such
              as whether the email sent through the Services was delivered and
              opened and whether links within the email were clicked. They also
              allow us to collect information such as the recipient’s IP
              address, browser, email client type and other similar details. We
              use this information to measure the performance of your email
              campaigns, and to provide analytics information and enhance the
              effectiveness of our Services. Reports are also available to us
              when we send email to you, so we may collect and review that
              information.
              <br />
              <br />
              <span className="font-bold">D. Member Distribution Lists</span>
              <br />A Distribution List can be created in a number of ways,
              including by importing Contacts, such as through a CSV or directly
              from your email client. Your Distribution Lists are stored on a
              secure TSI server. We do not, under any circumstances, sell your
              Distribution Lists. If someone on your Distribution List complains
              or contacts us, we might then contact that person. You may export
              (download) your Distribution Lists from TSI at any time.
              <br />
              <br />
              If we detect abusive or illegal behavior related to your
              Distribution List, we may share your Distribution List or portions
              of it with affected ISPs or anti-spam organizations to the extent
              permitted or required by applicable law.
              <br />
              <br />
              <span className="font-bold">E. Other Data Protection Rights</span>
              <br />
              You and your Contacts may have the following data protection
              rights:
              <br />
              <br />
              <ul
                role="list"
                className="marker:text-dark dark:marker:text-secondary dark:text-secondary list-disc pl-5 space-y-3 text-dark"
              >
                <li>
                  To access, correct, update or request deletion of Personal
                  Information. TSI takes reasonable steps to ensure that the
                  data we collect is reliable for its intended use, accurate,
                  complete and up to date. As a Member, you can manage many of
                  your individual account and profile settings within the
                  dashboard provided through the TSI platform, or you may
                  contact us directly by emailing us at{" "}
                  <a
                    className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                    href="mailto:legal@timkado.id"
                  >
                    legal@timkado.id
                  </a>
                  . You can also manage information about your Contacts within
                  the dashboard provided through the TSI platform to assist you
                  with responding to requests to access, correct, update or
                  delete information that you receive from your Contacts.
                </li>
                <li>
                  Similarly, if Personal Information is collected or processed
                  on the basis of consent, the data subject can withdraw their
                  consent at any time. Withdrawing your consent will not affect
                  the lawfulness of any processing we conducted prior to your
                  withdrawal, nor will it affect processing of your Personal
                  Information conducted in reliance on lawful processing grounds
                  other than consent. If you receive these requests from
                  Contacts, you can segment your lists within the TSI platform
                  to ensure that you only market to Contacts who have not opted
                  out of receiving such marketing.
                </li>
                <li>
                  The right to complain to a data protection authority about the
                  collection and use of Personal Information. For more
                  information, please contact your local data protection
                  authority.
                </li>
              </ul>
              <br />
              We respond to all requests we receive from individuals wishing to
              exercise their data protection rights in accordance with
              applicable data protection law. We may ask you to verify your
              identity in order to help us respond efficiently to your request.
              If we receive a request from one of your Contacts, we will either
              direct the Contact to reach out to you, or, if appropriate, we may
              respond directly to their request.
              <br />
              <br />
              <h4 className="font-bold text-xl">3. Privacy for Contacts</h4>
              <br />
              This section applies to the information we process about our
              Members’ Contacts as a data controller pursuant to our legitimate
              business interests, as explained in the &quot;Legal Basis for
              Processing&quot; section below. Our Services are intended for use
              by our Members. As a result, for much of the Personal Information
              we collect and process about Contacts through the Services, we act
              as a processor on behalf of our Members. TSI is not responsible
              for the privacy or security practices of our Members, which may
              differ from those set forth in this privacy policy. Please check
              with individual Members about the policies they have in place. For
              purposes of this section, &quot;you&quot; and &quot;your&quot;
              refer to Contacts.
              <br />
              <br />
              <span className="font-bold">A. Information We Collect</span>
              <br />
              The Personal Information that we may collect or receive about you
              broadly falls into the following categories:
              <br />
              <br />
              (i) Information we receive about Contacts from our Members: A
              Member may provide Personal Information about you to us through
              the Services. For example, when a Member uploads their
              Distribution List or integrates the Services with another website
              or service (for example, when a Member chooses to connect their
              e-commerce account with TSI), or when you sign up for a Member’s
              Distribution List on a TSI signup form, they may provide us with
              certain contact information or other Personal Information about
              you such as your name, email address, address or telephone number.
              You may have the opportunity to update some of this information by
              electing to update or manage your preferences via an email you
              receive from a Member.
              <br />
              <br />
              (ii) Information we collect automatically: When you interact with
              a messaging campaign that you receive from a Member or browse or
              purchase from a Member’s connected store, we may collect
              information about your device and interaction with a landing page.
              We use cookies and other tracking technologies to collect some of
              this information. Our use of cookies and other tracking
              technologies is discussed more below.
              <br />
              <br />
              <ul
                role="list"
                className="marker:text-dark dark:marker:text-secondary dark:text-secondary list-disc pl-5 space-y-3 text-dark"
              >
                <li>
                  Device information: We collect information about the device
                  and applications you use to access emails sent through our
                  Services, such as your IP address, your operating system, your
                  browser ID, and other information about your system and
                  connection.
                </li>
                <li>
                  Product usage data: We collect usage data about you whenever
                  you interact with emails sent through the Services, which may
                  include dates and times you access emails and your browsing
                  activities (such as what pages are viewed). We also collect
                  information regarding the performance of the Services,
                  including metrics related to the deliverability of emails and
                  other electronic communications our Members send through the
                  Services. This information allows us to improve the content
                  and operation of the Services and facilitate research and
                  analysis of the Services.
                </li>
              </ul>
              <br />
              (iii) Information we collect from other sources: From time to
              time, we may obtain information about you from third-party
              sources, such as social media platforms and third-party data
              providers. We take steps to ensure that such third parties are
              legally or contractually permitted to disclose such information to
              us, and we use this information to provide publicly available
              social media information about you to Members who have enabled the
              &quot;Social Profiles&quot; feature in their TSI accounts.
              <br />
              <br />
              <span className="font-bold">B. Use of Personal Information</span>
              <br />
              We may use the Personal Information we collect or receive about
              you for our legitimate business interests, including:
              <br />
              <br />
              <ul
                role="list"
                className="marker:text-dark dark:marker:text-secondary dark:text-secondary list-disc pl-5 space-y-3 text-dark"
              >
                <li>
                  To enforce compliance with our Terms of Use and applicable
                  law. This may include developing tools and algorithms that
                  help us prevent violations.
                </li>
                <li>
                  To protect the rights and safety of our Members and third
                  parties, as well as our own. For example, sometimes we review
                  the content of our Members’ email campaigns to make sure they
                  comply with our Terms of Use. To improve that process, we have
                  software that helps us find email campaigns that may violate
                  our Terms of Use. Our employees or independent contractors may
                  review those particular email campaigns, which may include
                  your contact information. This reduces the amount of spam
                  being sent through our servers and helps us maintain high
                  deliverability.
                </li>
                <li>
                  To meet legal requirements, including complying with court
                  orders, valid discovery requests, valid subpoenas, and other
                  appropriate legal mechanisms.{" "}
                </li>
                <li>
                  To provide information to representatives and advisors,
                  including attorneys and accountants, to help us comply with
                  legal, accounting, or security requirements. • To prosecute
                  and defend a court, arbitration, or similar legal proceeding.
                </li>
                <li>
                  To respond to lawful requests by public authorities, including
                  to meet national security or law enforcement requirements.{" "}
                </li>
                <li>
                  To provide, support and improve the Services. For example,
                  this may include sharing your information with third parties
                  in order to provide and support our Services or to make
                  certain features of the Services available to our Members.
                  When we share Personal Information with third parties, we take
                  steps to protect your information by requiring these third
                  parties to enter into a contract with us that requires them to
                  use the Personal Information we transfer to them in a manner
                  that is consistent with this privacy policy and applicable
                  privacy laws.{" "}
                </li>
                <li>
                  For our data analytics projects. Our data analytics projects
                  use data from TSI accounts, including your Personal
                  Information, to provide and improve the Services. We use
                  information, like your purchase history, provided to us by
                  Members, so we can make more informed predictions, decisions,
                  and products for our Members. For example, we use data from
                  TSI accounts to enable product recommendation, audience
                  segmentation, and predicted demographics features for our
                  Members. If you prefer not to share this data, you can opt out
                  of data analytics projects at any time by emailing us at{" "}
                  <a
                    className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                    href="mailto:legal@timkado.id"
                  >
                    legal@timkado.id
                  </a>
                  .{" "}
                </li>
                <li>
                  Other purposes. To carry out other legitimate business
                  purposes, as well as other lawful purposes.{" "}
                </li>
              </ul>
              <br />
              <span className="font-bold">
                C. Cookies and Tracking Technologies
              </span>
              <br />
              We and our partners may use various technologies to collect and
              store information when you interact with a Member’s messaging
              campaign or connected store, and this may include using cookies
              and similar tracking technologies, such as pixels and web beacons.
              For example, we use web beacons in the landing pages we send on
              behalf of our Members. When you receive and engage with a Member’s
              campaign, web beacons track certain behavior such as whether the
              landing page accessed through the TSI platform was delivered and
              opened and whether links within the message were clicked. They
              also allow us to collect information such as your IP address,
              browser, email client type, and other similar details. We use this
              information to measure the performance of our Members’ messaging
              campaigns, and to provide analytics information and enhance the
              effectiveness of our Services. <br /> <br />
              <span className="font-bold">
                D. Legal Basis for Processing
              </span>{" "}
              <br />
              We process Personal Information about you as a data controller as
              described in this section, where such processing is in our
              legitimate interests and not overridden by your data protection
              interests or fundamental rights and freedoms. Our legitimate
              interests typically include: improving, maintaining, providing,
              and enhancing our technology, products and services; and ensuring
              the security of the Services and our Website.
              <br /> <br />
              <span className="font-bold">
                E. Other Data Protection Rights
              </span>{" "}
              <br />
              You may have the following data protection rights:
              <br /> <br />
              <ul
                role="list"
                className="marker:text-white dark:marker:text-secondary dark:text-secondary list-disc pl-5 space-y-3 text-dark"
              >
                <li>
                  To access, correct, update or request deletion of your
                  Personal Information. TSI takes reasonable steps to ensure
                  that the data we collect is reliable for its intended use,
                  accurate, complete, and up to date. You may contact us
                  directly at any time about accessing, correcting, updating or
                  deleting your Personal Information, or altering your data, by
                  submitting a request to us at{" "}
                  <a
                    className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                    href="mailto:legal@timkado.id"
                  >
                    legal@timkado.id
                  </a>
                  . We will consider your request in accordance with applicable
                  laws.
                </li>
              </ul>
              <br />
              As described above, for much of the Personal Information we
              collect and process about Contacts through the Services, we act as
              a processor on behalf of our Members. In such cases, if you are a
              Contact and want to exercise any data protection rights that may
              be available to you under applicable law or have questions or
              concerns about how your Personal Information is handled by TSI as
              a processor on behalf of our individual Members, you should
              contact the relevant Member that is using the TSI Services, and
              refer to their separate privacy policies.
              <br />
              <br />
              If you no longer want to be contacted by one of our Members
              through our Services, please unsubscribe directly from that
              Member’s newsletter/mailing list or contact the Member directly to
              update or delete your data. If you contact us directly, we may
              remove or update your information within a reasonable time and
              after providing notice to the Member of your request.
              <br />
              <br />
              We respond to all requests we receive from individuals wishing to
              exercise their data protection rights in accordance with
              applicable data protection laws. We may ask you to verify your
              identity in order to help us respond efficiently to your request.
              <br />
              <br />
              <h4 className="font-bold text-xl">2. Privacy for Members</h4>
              <br />
              This section applies to Personal Information that we collect and
              process through our Websites and in the usual course of our
              business, such as in connection with our recruitment, events,
              sales and marketing activities. In this section &quot;you&quot;
              and &quot;your&quot; refers to Visitors.
              <br />
              <br />
              <span className="font-bold">A. Information We Collect</span>
              <br />
              (i) Information you provide to us on the Websites or otherwise:
              Certain parts of our Websites may ask you to provide Personal
              Information voluntarily. For example, we may ask you to provide
              certain Personal Information (such as your name, contact details,
              company name, profile information) in order to sign up for a free
              or paid TSI account, apply for a role with TSI, or otherwise
              submit inquiries to us. We may also collect Personal Information,
              such as your contact and job details and feedback, when you attend
              our events, take part in surveys, or through other business or
              marketing interactions we may have with you. You may choose to
              provide additional information when you communicate with us or
              otherwise interact with us, and we will keep copies of any such
              communications for our records.
              <br />
              <br />
              The Personal Information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your Personal Information. We
              will also let you know prior to collection whether the provision
              of the Personal Information we are collecting is compulsory or may
              be provided on a voluntary basis and the consequences, if any, of
              not providing the information.
              <br />
              <br />
              (ii) Information we collect automatically through the Websites:
              When you visit our Websites, we may also collect certain
              information automatically from your device. In some countries,
              including countries in the European Economic Area, this
              information may be considered Personal Information under
              applicable data protection laws.
              <br />
              <br />
              Specifically, the information we collect automatically may include
              your IP address, your operating system, your browser ID, your
              browsing activity, and other information about your system and
              connection and how you interact with our Websites and other
              websites. We may collect this information as a part of log files
              as well as through the use of cookies or other tracking
              technologies.
              <br />
              <br />
              <span className="font-bold">B. Use of Personal Information</span>
              <br />
              We may use the information we collect through our Websites for a
              range of reasons, including:
              <br />
              <br />
              <ul
                role="list"
                className="marker:text-dark list-disc pl-5 space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
              >
                <li>
                  To provide, operate, optimize, and maintain our Websites
                </li>
                <li>
                  To send you information for marketing purposes, in accordance
                  with your marketing preferences.
                </li>
                <li>
                  For recruitment purposes if you have applied for a role with
                  TSI.
                </li>
                <li>
                  To respond to your online inquiries and requests, and to
                  provide you with information and access to resources or
                  services that you have requested from us.
                </li>
                <li>
                  To manage our Websites and system administration and security.
                </li>
                <li>To improve the navigation and content of our Websites.</li>
                <li>
                  To identify any server problems or other IT or network issues.
                </li>
                <li>To process transactions and to set up online accounts.</li>
                <li>
                  To compile aggregated statistics about site usage and to
                  better understand the preferences of our Visitors.
                </li>
                <li>
                  To carry out research and development to improve our products
                  and services.
                </li>
                <li>To customize content and layout of the Websites.</li>
                <li>
                  To carry out other legitimate business purposes, as well as
                  other lawful purposes.
                </li>
              </ul>
              <br />
              In addition, we may combine Personal Information with other
              information we collect or obtain about you (such as information we
              source from our third-party partners) to serve you specifically,
              such as to deliver a product or service according to your
              preferences or restrictions, or for advertising or targeting
              purposes in accordance with this privacy policy. When we combine
              Personal Information with other information in this way, we treat
              it as, and apply all of the safeguards in this privacy policy
              applicable to, Personal Information.
              <br />
              <br />
              <span className="font-bold">
                C. Cookies and Tracking Technologies
              </span>
              <br />
              We use cookies and similar tracking technologies to collect and
              use Personal Information about you, including to serve
              interest-based advertising.
              <br />
              <br />
              <span className="font-bold">D. Other Data Protection Rights</span>
              <br />
              You have the following data protection rights:
              <br />
              <br />
              <ul
                role="list"
                className="marker:text-dark list-disc pl-5 space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
              >
                <li>
                  To access, correct, update, or request deletion of your
                  Personal Information. TSI takes reasonable steps to ensure
                  that the data we collect is reliable for its intended use,
                  accurate, complete, and up to date. You may contact us
                  directly at any time about accessing, correcting, updating, or
                  deleting your Personal Information, or altering your data or
                  marketing preferences by emailing us at{" "}
                  <a
                    className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                    href="mailto:legal@timkado.id"
                  >
                    legal@timkado.id
                  </a>
                  . We will consider your request in accordance with applicable
                  laws.
                </li>
                <li>
                  Similarly, if we have collected and processed your Personal
                  Information with your consent, then you can withdraw your
                  consent at any time. Withdrawing your consent will not affect
                  the lawfulness of any processing we conducted prior to your
                  withdrawal, nor will it affect processing of your Personal
                  Information conducted in reliance on lawful processing grounds
                  other than consent.
                </li>
              </ul>
              <br />
              We respond to all requests we receive from individuals wishing to
              exercise their data protection rights in accordance with
              applicable data protection laws. We may ask you to verify your
              identity in order to help us respond efficiently to your request.
              <br />
              <br />
              <h4 className="font-bold text-xl">5. General Information</h4>
              <br />
              <span className="font-bold">A. How We Share Information</span>
              <br />
              We may share and disclose your Personal Information to the
              following types of third parties for the purposes described in
              this privacy policy (for purposes of this section, &quot;you&quot;
              and &quot;your&quot; refer to Members, Contacts, and Visitors
              unless otherwise indicated):
              <br />
              <br />
              (i) Our service providers: Sometimes, we share your information
              with our third-party service providers, who help us provide and
              support our Services and other business-related functions.
              <br />
              <br />
              For example, if it is necessary to provide Members something they
              have requested (like enable a feature such as Social Profiles),
              then we may share Members’ or Contacts’ Personal Information with
              a service provider for that purpose. Other examples include
              analyzing data, hosting data, engaging technical support for our
              Services, processing payments, and delivering content.
              <br />
              <br />
              These third-party service providers enter into a contract that
              requires them to use your Personal Information only for the
              provision of services to us and in a manner that is consistent
              with this privacy policy.
              <br />
              <br />
              These third-party service providers enter into a contract that
              requires them to use your Personal Information only for the
              provision of services to us and in a manner that is consistent
              with this privacy policy.
              <br />
              <br />
              (ii) Advertising partners: We may partner with third-party
              advertising networks and exchanges to display advertising on our
              Websites or to manage and serve our advertising on other sites and
              may share Personal Information of Members and Visitors with them
              for this purpose. We and our third-party partners may use cookies
              and other tracking technologies, such as pixels and web beacons,
              to gather information about your activities on our Websites and
              other sites in order to provide you with targeted advertising
              based on your browsing activities and interests.
              <br />
              <br />
              (iii) Any competent law enforcement body, regulatory body,
              government agency, court or other third party where we believe
              disclosure is necessary (a) as a matter of applicable law or
              regulation, (b) to exercise, establish, or defend our legal
              rights, or (c) to protect your vital interests or those of any
              other person.
              <br />
              <br />
              (iv) A potential buyer (and its agents and advisors) in the case
              of a sale, merger, consolidation, liquidation, reorganization, or
              acquisition. In that event, any acquirer will be subject to our
              obligations under this privacy policy, including your rights to
              access and choice. We will notify you of the change either by
              sending you an email or posting a notice on our Website.
              <br />
              <br />
              (v) Any other person with your consent.
              <br />
              <br />
              <span className="font-bold">B. Your Choices and Opt-Outs</span>
              <br />
              Members and Visitors who have opted into our marketing emails can
              opt out of receiving marketing emails from us at any time by
              clicking the &quot;unsubscribe&quot; link at the bottom of our
              marketing messages.
              <br />
              <br />
              Also, all opt-out requests can be made by emailing us using the
              contact details provided in the &quot;Questions and Concerns&quot;
              section below. Please note that some communications (such as
              service messages, account notifications, billing information) are
              considered transactional and necessary for account management, and
              Members cannot opt out of these messages unless you cancel your
              TSI account.
              <br />
              <br />
              <span className="font-bold">C. Our Security</span>
              <br />
              We take appropriate and reasonable technical and organizational
              measures to protect Personal Information from loss, misuse,
              unauthorized access, disclosure, alteration, and destruction,
              taking into account the risks involved in the processing and the
              nature of the Personal Information. If you have any questions
              about the security of your Personal Information, you may contact
              us at{" "}
              <a
                className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                href="mailto:legal@timkado.id"
              >
                legal@timkado.id
              </a>
              .
              <br />
              <br />
              TSI accounts require a username and password to log in. Members
              must keep their username and password secure, and never disclose
              it to a third party. Because the information in a Member’s TSI
              account is so sensitive, account passwords are hashed, which means
              we cannot see a Member’s password. We cannot resend forgotten
              passwords either. We will only provide Members with instructions
              on how to reset them.
              <br />
              <br />
              <span className="font-bold">D. Retention of Data</span>
              <br />
              We retain Personal Information where we have an ongoing legitimate
              business or legal need to do so. Our retention periods will vary
              depending on the type of data involved, but, generally,
              we&lsquo;ll refer to these criteria in order to determine
              retention period:
              <br />
              <br />
              <ul
                role="list"
                className="marker:text-dark list-disc pl-5 space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
              >
                <li>
                  Whether we have a legal or contractual need to retain the
                  data.
                </li>
                <li>Whether the data is necessary to provide our Services.</li>
                <li>
                  Whether our Members have the ability to access and delete the
                  data within their TSI accounts.
                </li>
                <li>
                  Whether our Members would reasonably expect that we would
                  retain the data until they remove it or until their TSI
                  accounts are closed or terminated.
                </li>
              </ul>
              <br />
              When we have no ongoing legitimate business need to process your
              Personal Information, we will either delete or anonymize it or, if
              this is not possible (for example, because your Personal
              Information has been stored in backup archives), then we will
              securely store your Personal Information and isolate it from any
              further processing until deletion is possible.
              <br />
              <br />
              <span className="font-bold">
                E. Where We Store Your Personal Information
              </span>
              <br />
              The Personal Information that we collect from you may be stored
              at, transferred to, or processed by third party service providers.
              We will use all reasonable endeavors to ensure that all such
              third-party service providers provide a level of protection that
              is comparable to our commitments under this Privacy Policy.
              <br />
              <br />
              Your Personal Information may also be stored or processed outside
              of your country by personnel who work for us in other countries,
              or by our third-party service providers, suppliers, contractors or
              Affiliates, to the extent permitted under the applicable law. In
              such a case, we will ensure that such Personal Information remains
              subject to a level of protection comparable to what is required
              under the laws of your country (and, in any event, in line with
              our commitments in this Privacy Policy).
              <br />
              <br />
              <span className="font-bold">
                F. Security of Your Personal Information
              </span>
              <br />
              Confidentiality of your Personal Information is of utmost
              importance to us. We will use all reasonable efforts to protect
              and secure your Personal Information against access, collection,
              use or disclosure by unauthorized persons and against unlawful
              processing, accidental loss, destruction and damage or similar
              risks. Unfortunately, the transmission of information via the
              Internet is not completely secure. Although we will do our best to
              protect your Personal Information, you acknowledge that we cannot
              guarantee the integrity and accuracy of any Personal Information
              which you transmit over the Internet, nor guarantee that such
              Personal Information would not be intercepted, accessed,
              disclosed, altered or destroyed by unauthorized third parties, due
              to factors beyond our control. You are responsible for keeping
              your Account details confidential and you must not share your
              password with anyone, and you must always maintain the security of
              the mobile device that you use.
              <br />
              <br />
              <span className="font-bold">G. Language</span>
              <br />
              If there is any inconsistency between the English version of this
              Privacy Policy and other language versions, the English version
              shall prevail.
              <br />
              <br />
              <span className="font-bold">H. Acknowledgement And Consent </span>
              <br />
              <br />
              <ul
                role="list"
                className="marker:text-dark list-[lower-roman] pl-5 space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
              >
                <li>
                  By accepting the Privacy Policy, you acknowledge that you have
                  read and understood this Privacy Policy and you accept all of
                  its terms. In particular, you agree and consent to us
                  collecting, using, disclosing, storing, transferring, or
                  otherwise processing your Personal Information in accordance
                  with this Privacy Policy.
                </li>
                <li>
                  In circumstances where you provide us with Personal
                  Information relating to other individuals (such as Personal
                  Information relating to your spouse, family members or
                  friends), you represent and warrant that you have obtained
                  such individual’s consent for, and hereby consent on behalf of
                  such individual to, the collection, use, disclosure and
                  processing of his/her Personal Information by us.
                </li>
                <li>
                  You may withdraw your consent to any or all collection, use or
                  disclosure of your Personal Information at any time by giving
                  us reasonable notice in writing using the contact details
                  stated below. You may also withdraw your consent for us to
                  send you certain communications and information via any
                  &quot;opt-out&quot; or &quot;unsubscribe&quot; facility
                  contained in our messages to you. Depending on the
                  circumstances and the nature of the consent which you are
                  withdrawing, you must understand and acknowledge that after
                  such withdrawal of consent, you may no longer be able to use
                  the Application or certain of the Transportation Services. A
                  withdrawal of consent by you may result in the termination of
                  your Account or of your contractual relationship with us, with
                  all accrued rights and obligations remaining fully reserved.
                  Upon receipt of your notice to withdraw consent for any
                  collection, use or disclosure of your Personal Information, we
                  will inform you of the likely consequences of such withdrawal
                  so that you can decide if indeed you wish to withdraw consent.
                </li>
              </ul>
              <br />
              <br />
              <span className="font-bold">I. Anoymised Data </span>
              <br />
              We may create, use, license or disclose Personal Information,
              provided, however, (i) that all identifiers have been removed such
              that the data, alone or in combination with other available data,
              cannot be attributed to or associated with or cannot identify any
              person, and (ii) that has been combined with similar data such
              that the original data forms a part of a larger data set.
              <br />
              <br />
              <span className="font-bold">J. Third Party Platforms </span>
              <br />
              Our Application, Website, and Marketing Material may contain links
              to websites, plug-ins, and applications that are operated by third
              parties (&quot;<strong>Third Party Platforms</strong>&quot;).
              Clicking on these links or enabling any connections to these
              Third-Party Platforms may allow such third parties to collect and
              process your Personal Information. We may also occasionally use
              Third Party Platforms to collect your Personal Information. Before
              submitting or uploading any Personal Information over these
              Third-Party Platforms, you should consult the terms and conditions
              and privacy policies of these Third-Party Platforms to find out
              how they collect and use your Personal Information. We do not
              control nor accept liability or responsibility for these
              Third-Party Platforms and/or the collection, use, maintenance,
              sharing, or disclosure of data and information by such third
              parties.
              <br />
              <br />
              Advertisements contained on our Application, Website, or operate
              as links to the advertiser’s website and as such any information
              they collect by virtue of your clicking on that link will be
              collected and used by the relevant advertiser in accordance with
              the privacy policy of that advertiser.
              <br />
              <br />
              Should you choose to connect your email or messaging account (e.g.
              Whatsapp, LINE, Facebook Messenger) to our platform, you will be
              using a set of features built using technology from Delapan Belas
              Pte Ltd. (hereafter known as &quot;Delapan Belas&quot;). By
              signing up or using the DAISI application, you understand and
              agree that Delapan Belas will have access to your information and
              will be permitted to use that information for specific, limited
              purposes to provide the Services to you, in accordance with our
              agreement with Delapan Belas.
              <br />
              <br />
              You have the option of integrating aspects of your messaging
              metadata with your account through our integration with Delapan
              Belas. We will ask for your consent to connect your Google account
              to your DAISI account. This step is optional but can very valuable
              in helping you to make the best use of our platform by tracking
              your interactions with your leads and customers.
              <br />
              <br />
              When you connect your Google account with the DAISI platform
              through Delapan Belas, we will have access to certain information
              such as the email meta headers (sender, recipient, and date), the
              email message body and subject line, or other information such as
              links are opened (&quot;
              <strong>Google Data</strong>&quot;).
              <br />
              <br />
              We only process Google Data you make available to us through this
              integration in order to provide the Service to you and to improve
              the Services, consistent with{" "}
              <span className="underline">
                Google&lsquo;s Limited Use Requirements
              </span>
              . We do not independently access the Google Data ourselves unless
              we first obtain your consent to view the Google Data (e.g., to
              provide you with tech support), we need to do so for internal
              security purposes, to comply with applicable law, or where the
              data is fully aggregated and anonymized for internal use purposes
              and cannot be used to identify you or your email recipients.
              <br />
              <br />
              In addition, we will only transfer the Google Data to others if
              necessary to provide or improve user-facing features that are
              prominent in the Services, to comply with applicable laws, or as
              part of a merger, acquisition, or sale of assets. We also do not
              use Google Data for advertising purposes.
              <br />
              <br />
              At any time, you can disconnect your Google account and delete
              this data in your in your account or by reaching out to{" "}
              <a
                className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                href="mailto:legal@timkado.id"
              >
                legal@timkado.id
              </a>{" "}
              and requesting that it be deleted.
              <br />
              <br />
              <strong>Information We Collect From Other Sources</strong>
              <br />
              <br />
              We may also obtain information from other sources and combine that
              with information we collect through our Services. For example, we
              may collect information about you from third parties, including
              but not limited to social media sites, credit bureaus, data
              enrichment providers and publicly available sources.
              <br />
              <br />
              <span className="font-bold">
                K. Changes To This Privacy Policy
              </span>
              <br />
              We may review and amend this Privacy Policy at our sole discretion
              from time to time, to ensure that it is consistent with our future
              developments, and/or changes in legal or regulatory requirements.
              If we decide to amend this Privacy Policy, we will notify you of
              any such amendments by means of a general notice published on the
              Application and/or Website, or otherwise to your Member’s e-mail
              address set out in your Account. You agree that it is your
              responsibility to review this Privacy Policy regularly for the
              latest information on our data processing and data protection
              practices, and that your continued use of the Application or
              Website, communications with us, or access to and use of our
              services following any amendments to this Privacy Policy will
              constitute your acceptance to the amendments.
              <br />
              <br />
              <span className="font-bold">L. Questions & Concerns</span>
              <br />
              If you have any questions or comments, or if you have a concern
              about the way in which we have handled any privacy matter, please
              email us at{" "}
              <a
                className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                href="mailto:legal@timkado.id"
              >
                legal@timkado.id
              </a>
              .
            </div>

            {/* // start - privacy Indo */}
            <div
              id="p-term-privacy-indo"
              className="border-2 px-8 py-6  max-h-[400px] dark:text-secondary text-dark border-slate-300 shadow-lg rounded-md overflow-y-auto  w-full"
            >
              PT Timkado Sejahtera Indonesia, selanjutnya disebut
              &quot;TSI&quot;, menjaga privasi data dengan serius. Kebijakan
              privasi ini menjelaskan siapa kami, bagaimana kami mengumpulkan,
              membagikan, dan menggunakan Informasi Pribadi, dan bagaimana Anda
              dapat menggunakan hak privasi Anda. Kebijakan Privasi (Pengkinian
              20 October 2019) PT Timkado Sejahtera Indonesia, selanjutnya
              disebut &quot;TSI&quot;, menjaga privasi data dengan serius.
              Kebijakan privasi ini menjelaskan siapa kami, bagaimana kami
              mengumpulkan, membagikan, dan menggunakan Informasi Pribadi, dan
              bagaimana Anda dapat menggunakan hak privasi Anda.
              <br />
              <br />
              Kami menyarankan Anda membaca kebijakan privasi ini secara lengkap
              untuk memastikan Anda mendapat informasi lengkap. Namun, untuk
              memudahkan Anda meninjau bagian-bagian dari kebijakan privasi ini
              yang berlaku untuk Anda, kami telah membagi dokumen menjadi
              beberapa bagian yang secara khusus berlaku untuk Anggota (Bagian
              2), Kontak (Bagian 3), dan Pengunjung (Bagian 4). Bagian 1 dan 5
              berlaku untuk semua orang.
              <br />
              <br />
              Jika Anda memiliki pertanyaan atau kekhawatiran tentang penggunaan
              Informasi Pribadi Anda oleh kami, silakan hubungi kami menggunakan
              detail kontak yang disediakan di akhir Bagian 5.
              <br />
              <br />
              <h4 className="font-bold text-xl">1. Dasar-Dasar</h4>
              <br />
              <span className="font-bold">A. Tentang Kami</span> <br />
              DAISI adalah platform pemasaran online (&quot;Layanan&quot;) yang
              dilisensikan oleh PT Timkado Sejahtera Indonesia untuk dijual dan
              didistribusikan di negara Indonesia (&quot;kami&quot;,
              &quot;kami&quot;, &quot;milik kami&quot;, dan &quot;TSI&quot;).{" "}
              <br /> <br />
              Layanan memungkinkan Anggota kami untuk, antara lain, mengirim dan
              mengelola kampanye pengiriman pesan atau menayangkan iklan
              menggunakan email, SMS, dan aplikasi seperti Whatsapp, LINE, dan
              Facebook Messenger. Kami juga menyediakan layanan terkait lainnya,
              seperti analisis data untuk meningkatkan efektivitas kampanye
              pemasaran ini.
              <br /> <br />
              <span className="font-bold">B. Istilah Kunci</span>
              <br />
              Dalam kebijakan privasi ini, istilah-istilah ini memiliki arti
              sebagai berikut: <br /> <br />
              &quot;Audiens&quot; adalah orang atau beberapa orang yang ingin
              Anda baca pesan Anda. Audiens dapat ditentukan oleh satu atau
              lebih daftar distribusi.
              <br /> <br /> &quot;Kontak&quot; adalah orang yang dapat dihubungi
              oleh Anggota melalui Layanan kami. Dengan kata lain, Kontak adalah
              siapa saja yang ada dalam Daftar Distribusi Anggota atau tentang
              siapa Anggota telah memberikan informasi kepada kami. Misalnya,
              jika Anda adalah Anggota, pelanggan kampanye pemasaran email Anda
              akan dianggap sebagai Kontak.
              <br /> <br />
              &quot;Daftar Distribusi&quot; adalah daftar Kontak yang dapat
              diunggah atau dikelola Anggota di platform kami dan semua
              informasi terkait yang terkait dengan Kontak tersebut (misalnya,
              alamat email). <br /> <br />
              &quot;Anggota&quot; berarti setiap orang atau entitas yang
              terdaftar pada kami untuk menggunakan Layanan. <br /> <br />
              &quot;Informasi Pribadi&quot; berarti setiap informasi yang
              mengidentifikasi atau dapat digunakan untuk mengidentifikasi
              Anggota, Kontak, atau Pengunjung, secara langsung atau tidak
              langsung. Contoh Informasi Pribadi termasuk, namun tidak terbatas
              pada, nama depan dan belakang, tanggal lahir, alamat email, jenis
              kelamin, pekerjaan, atau informasi demografis lainnya.
              <br /> <br /> &quot;Situs Web&quot; berarti situs web apa pun yang
              kami miliki dan operasikan (seperti daisi.id) atau halaman web apa
              pun, fitur interaktif, aplikasi, widget, blog, jejaring sosial,
              &quot;tab&quot; jejaring sosial, atau online lainnya, penawaran
              seluler, atau nirkabel yang memposting tautan ke kebijakan privasi
              ini. <br /> <br /> &quot;Pengunjung&quot; berarti setiap orang
              yang mengunjungi Situs Web kami. <br /> <br /> &quot;Anda&quot;
              dan &quot;milik Anda&quot;, tergantung pada konteksnya, baik
              Anggota, Kontak, atau Pengunjung.
              <br />
              <br />
              <h4 className="font-bold text-xl">2. Privasi untuk Anggota</h4>
              <br />
              Bagian ini berlaku untuk Informasi Pribadi yang kami kumpulkan dan
              proses dari Anggota atau calon Anggota melalui penyediaan Layanan.
              Di bagian ini, &quot;Anda&quot; dan &quot;milik Anda&quot; merujuk
              pada Anggota dan calon Anggota.
              <br /> <br />
              <span className="font-bold">
                A. Informasi yang Kami Kumpulkan
              </span>
              <br />
              Informasi Pribadi yang dapat kami kumpulkan secara luas termasuk
              dalam kategori berikut:
              <br />
              <br />
              (i) Informasi yang Anda berikan kepada kami: Selama menggunakan
              Layanan kami, Anda dapat memberikan Informasi Pribadi tentang Anda
              dan Kontak Anda. Informasi Pribadi sering, tetapi tidak secara
              eksklusif, diberikan kepada kami ketika Anda mendaftar dan
              menggunakan Layanan, berkonsultasi dengan tim layanan pelanggan
              kami, mengirim email kepada kami, mengintegrasikan Layanan dengan
              situs web atau layanan lain (misalnya, ketika Anda memilih untuk
              menghubungkan akun e-commerce Anda dengan TSI), atau berkomunikasi
              dengan kami dengan cara lain.
              <br />
              <br />
              Kami akan memberi tahu Anda sebelum pengumpulan apakah penyediaan
              Informasi Pribadi yang kami kumpulkan bersifat wajib atau jika
              mungkin diberikan secara sukarela dan konsekuensinya, jika ada,
              dari tidak memberikan informasi tersebut. Dengan memberi kami
              informasi ini, Anda menyetujui informasi ini dikumpulkan,
              digunakan, dan diungkapkan seperti yang dijelaskan dalam kebijakan
              privasi ini. <br />
              <br />
              Informasi ini mungkin termasuk: <br />
              <ul
                role="list"
                className="marker:text-dark mr-4 mt-4 list-disc pl-5  space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
              >
                <li>
                  Informasi pendaftaran: Anda memerlukan akun TSI untuk
                  menggunakan Layanan sebagai Anggota. Saat Anda mendaftar untuk
                  sebuah akun, Anda akan diminta untuk memberikan informasi
                  dasar tertentu, seperti nama Anda, alamat email, nama
                  pengguna, kata sandi, nama perusahaan, pekerjaan, lokasi, dan
                  nomor telepon (misalnya, jika Anda menggunakan dua faktor
                  autentikasi).
                </li>
                <li>
                  Informasi penagihan dan komunikasi: Jika Anda membeli Layanan
                  kami, Anda mungkin juga perlu memberikan informasi pembayaran
                  dan penagihan kepada kami, seperti detail kartu kredit dan
                  alamat penagihan Anda. TSI juga akan menyimpan catatan
                  transaksi penagihan dan pembelian Anda, serta komunikasi dan
                  tanggapan apa pun.
                </li>
                <li>
                  Informasi yang kami proses atas nama Anda: Untuk mengirim
                  kampanye pesan atau menggunakan fitur tertentu di akun Anda,
                  Anda perlu mengunggah Daftar Distribusi yang memberi kami
                  informasi tentang Kontak Anda, seperti nama dan alamat email
                  mereka. Kami menggunakan dan memproses informasi ini untuk
                  menyediakan Layanan sesuai dengan instruksi Anda.{" "}
                </li>
              </ul>
              <br />
              (ii) Informasi yang kami kumpulkan secara otomatis: Saat Anda
              menggunakan Layanan, kami dapat secara otomatis mengumpulkan
              informasi tertentu tentang perangkat Anda dan penggunaan Layanan.
              Kami menggunakan cookie dan teknologi pelacakan lainnya untuk
              mengumpulkan beberapa informasi ini. Penggunaan cookie dan
              teknologi pelacakan lainnya oleh kami dibahas lebih lanjut di
              bawah ini.
              <br />
              <br />
              Informasi ini mungkin termasuk:
              <br />
              <ul
                role="list"
                className="marker:text-dark mr-4 mt-4 list-disc pl-5  space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
              >
                <li>
                  Informasi perangkat: Kami mengumpulkan informasi tentang
                  perangkat dan aplikasi yang Anda gunakan untuk mengakses
                  Layanan, seperti alamat IP Anda, sistem operasi Anda, ID
                  browser Anda, dan informasi lain tentang sistem dan koneksi
                  Anda.
                </li>
                <li>
                  Data log: Server web kami menyimpan file log yang merekam data
                  setiap kali perangkat mengakses server tersebut dan file log
                  tersebut berisi data tentang sifat setiap akses, termasuk
                  alamat IP asal. Kami juga dapat mengakses metadata dan
                  informasi lain yang terkait dengan file yang Anda unggah ke
                  Layanan kami.
                </li>
                <li>
                  Data penggunaan produk: Kami mengumpulkan data penggunaan
                  tentang Anda setiap kali Anda berinteraksi dengan Layanan
                  kami, yang dapat mencakup tanggal dan waktu Anda mengakses
                  Layanan dan aktivitas penelusuran Anda (seperti bagian mana
                  dari Layanan yang digunakan). Kami juga mengumpulkan informasi
                  mengenai kinerja Layanan, termasuk metrik yang terkait dengan
                  pengiriman email dan komunikasi lain yang Anda kirim melalui
                  Layanan. Informasi ini memungkinkan kami untuk meningkatkan
                  konten dan pengoperasian Layanan dan memfasilitasi penelitian
                  dan analisis Layanan.
                </li>
              </ul>
              <br />
              (iii) Informasi yang kami kumpulkan dari sumber lain: Dari waktu
              ke waktu, kami dapat memperoleh informasi tentang Anda atau Kontak
              Anda dari sumber pihak ketiga, seperti basis data publik, platform
              media sosial, penyedia data pihak ketiga, dan mitra pemasaran
              bersama kami. Kami mengambil langkah-langkah untuk memastikan
              bahwa pihak ketiga tersebut secara hukum atau kontrak diizinkan
              untuk mengungkapkan informasi tersebut kepada kami.
              <ul
                role="list"
                className="marker:text-dark mr-4 mt-4 list-disc pl-5  space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
              >
                <li>
                  Contoh informasi yang kami terima dari sumber lain termasuk
                  informasi demografis (seperti usia dan jenis kelamin),
                  informasi perangkat (seperti alamat IP), lokasi (seperti kota
                  dan negara bagian), dan data perilaku online (seperti
                  informasi tentang penggunaan situs media sosial, informasi
                  tampilan halaman dan hasil pencarian dan tautan). Kami
                  menggunakan informasi ini, sendiri atau dalam kombinasi dengan
                  informasi lain (termasuk Informasi Pribadi) yang kami
                  kumpulkan, untuk meningkatkan kemampuan kami dalam menyediakan
                  pemasaran dan konten yang relevan kepada Anda dan untuk
                  mengembangkan dan menyediakan produk, fitur, dan layanan yang
                  lebih relevan kepada Anda.
                </li>
              </ul>
              <br />
              (iv) Informasi dari penggunaan aplikasi kami: Saat Anda
              menggunakan aplikasi kami, kami dapat mengumpulkan perangkat
              tertentu dan informasi terkait penggunaan selain informasi yang
              dijelaskan di bagian lain dalam kebijakan privasi ini.
              <ul
                role="list"
                className="marker:text-dark mr-4 mt-4 list-disc pl-5  space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
              >
                <li>
                  Informasi perangkat: Kami dapat mengumpulkan informasi tentang
                  jenis perangkat dan sistem operasi yang Anda gunakan. Kami
                  tidak meminta, mengakses, atau melacak informasi berbasis
                  lokasi apa pun dari perangkat seluler Anda kapan pun saat
                  mengunduh atau menggunakan aplikasi atau Layanan seluler kami.
                </li>
                <li>
                  Data penggunaan produk: Kami mungkin menggunakan perangkat
                  lunak analitik (seperti Google Analytics) untuk lebih memahami
                  bagaimana orang menggunakan aplikasi kami. Kami dapat
                  mengumpulkan informasi tentang seberapa sering Anda
                  menggunakan aplikasi dan data kinerja lainnya.
                </li>
              </ul>
              <br />
              <span className="font-bold">B. Penggunaan Informasi Pribadi</span>
              <br />
              Kami dapat menggunakan Informasi Pribadi yang kami kumpulkan
              melalui Layanan atau sumber lain untuk berbagai alasan, termasuk:
              <br />
              <ul
                role="list"
                className="marker:text-dark mr-4 mt-4 list-disc pl-5  space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
              >
                <li>
                  Untuk menagih dan menagih uang yang terutang kepada kami oleh
                  Anda. Ini termasuk mengirimi Anda email, faktur, tanda terima,
                  pemberitahuan tunggakan, dan memperingatkan Anda jika kami
                  memerlukan nomor kartu kredit yang berbeda. Kami menggunakan
                  pihak ketiga untuk pemrosesan transaksi kartu kredit yang
                  aman, dan pihak ketiga tersebut mengumpulkan informasi
                  penagihan untuk memproses pesanan dan pembayaran kartu kredit
                  Anda. Untuk mempelajari lebih lanjut tentang langkah-langkah
                  yang kami ambil untuk melindungi data tersebut, lihat bagian
                  &quot;Keamanan Kami&quot; dari kebijakan privasi ini.
                </li>
                <li>
                  Untuk mengirimi Anda pesan peringatan sistem. Misalnya, kami
                  dapat memberi tahu Anda tentang perubahan sementara atau
                  permanen pada Layanan kami, seperti pemadaman yang
                  direncanakan, atau mengirimi Anda akun, pemberitahuan keamanan
                  atau kepatuhan, seperti fitur baru, pembaruan versi, rilis,
                  peringatan penyalahgunaan, dan perubahan pada kebijakan
                  privasi ini.
                </li>
                <li>
                  Untuk berkomunikasi dengan Anda tentang akun Anda dan
                  memberikan dukungan pelanggan. Misalnya, jika Anda menggunakan
                  aplikasi seluler kami, kami mungkin menanyakan apakah Anda
                  ingin menerima pemberitahuan push tentang aktivitas di akun
                  Anda. Jika Anda telah memilih pemberitahuan push ini dan tidak
                  ingin lagi menerimanya, Anda dapat mematikannya melalui sistem
                  operasi Anda.
                </li>
                <li>
                  Untuk memfasilitasi atau mengaktifkan pemeriksaan apa pun yang
                  kami anggap perlu menurut kebijaksanaan kami sebelum kami
                  mendaftarkan Anda sebagai Anggota, termasuk proses mengenal
                  pelanggan Anda (&quot;KYC&quot;);
                </li>
                <li>
                  Untuk menegakkan kepatuhan terhadap Ketentuan Penggunaan kami
                  dan hukum yang berlaku, dan untuk melindungi hak dan keamanan
                  Anggota kami dan pihak ketiga, serta hak kami sendiri. Ini
                  mungkin termasuk mengembangkan alat dan algoritme yang
                  membantu kami mencegah pelanggaran. Misalnya, terkadang kami
                  meninjau konten kampanye email Anggota kami untuk memastikan
                  mereka mematuhi Ketentuan Penggunaan kami. Untuk meningkatkan
                  proses itu, kami memiliki perangkat lunak yang membantu kami
                  menemukan kampanye email yang mungkin melanggar Ketentuan
                  Penggunaan kami. Karyawan atau kontraktor independen kami
                  dapat meninjau kampanye email tertentu tersebut. Ini
                  menguntungkan semua Anggota yang mematuhi Ketentuan Penggunaan
                  kami karena ini mengurangi jumlah spam yang dikirim melalui
                  server kami dan membantu kami mempertahankan kemampuan
                  pengiriman yang tinggi. Layanan email dan pesan seperti
                  Whatsapp belum tentu dibangun untuk informasi rahasia. Harap
                  jangan gunakan TSI untuk mengirim informasi rahasia.
                </li>
                <li>
                  Untuk memenuhi persyaratan hukum, termasuk mematuhi perintah
                  pengadilan, permintaan penemuan yang sah, panggilan pengadilan
                  yang sah, dan mekanisme hukum lain yang sesuai.
                </li>
                <li>
                  Untuk memberikan informasi kepada perwakilan dan penasihat,
                  termasuk pengacara dan akuntan, untuk membantu kami mematuhi
                  persyaratan hukum, akuntansi, atau keamanan.
                </li>
                <li>
                  Untuk menuntut dan membela pengadilan, arbitrase, atau proses
                  hukum serupa.
                </li>
                <li>
                  Untuk menanggapi permintaan yang sah dari otoritas publik,
                  termasuk untuk memenuhi persyaratan keamanan nasional atau
                  penegakan hukum.
                </li>
                <li>
                  Untuk menyediakan, mendukung dan meningkatkan Layanan.
                  Misalnya, ini mungkin termasuk berbagi informasi Anda atau
                  Kontak Anda dengan pihak ketiga untuk menyediakan dan
                  mendukung Layanan kami atau untuk membuat fitur tertentu dari
                  Layanan tersedia untuk Anda. Saat kami membagikan Informasi
                  Pribadi dengan pihak ketiga, kami mengambil langkah-langkah
                  untuk melindungi informasi Anda dengan mewajibkan pihak ketiga
                  ini untuk membuat kontrak dengan kami yang mengharuskan mereka
                  untuk menggunakan Informasi Pribadi yang kami transfer kepada
                  mereka dengan cara yang konsisten dengan kebijakan privasi
                  ini. dan undang-undang privasi yang berlaku.
                </li>
                <li>
                  Untuk memberikan saran kepada Anda. Termasuk menambahkan fitur
                  yang membandingkan kampanye email Anggota, menggunakan data
                  untuk menyarankan penerbit lain yang mungkin diminati oleh
                  Kontak Anda, atau menggunakan data untuk menyarankan produk
                  atau layanan yang mungkin Anda minati atau yang mungkin
                  relevan bagi Anda atau Kontak Anda. Beberapa saran ini
                  dihasilkan dengan menggunakan proyek analisis data kami, yang
                  dijelaskan di bawah ini.
                </li>
                <li>
                  Untuk proyek analisis data kami. Proyek analitik data kami
                  menggunakan data dari akun TSI, termasuk Informasi Pribadi
                  Kontak, untuk menyediakan dan meningkatkan Layanan. Kami
                  menggunakan informasi seperti kebiasaan mengirim Anda dan
                  detail Kontak Anda, sehingga kami dapat membuat prediksi,
                  keputusan, dan produk yang lebih tepat untuk Anggota kami.
                  Anda atau Kontak Anda dapat memilih keluar dari proyek
                  analitik data kapan saja dengan mengirim email kepada kami di
                  <a
                    className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                    href="mailto:legal@timkado.id"
                  >
                    legal@timkado.id
                  </a>{" "}
                  Misalnya, kami menggunakan data dari akun TSI untuk
                  mengaktifkan rekomendasi produk, segmentasi audiens, dan fitur
                  prediksi demografi untuk Anggota kami. Kami akan bertindak
                  sebagai pengontrol data untuk memproses data untuk proyek
                  analitik data kami dengan mengandalkan kepentingan bisnis sah
                  kami untuk meningkatkan dan menyempurnakan produk dan layanan
                  kami untuk Anggota kami. Seperti biasa, kami menjaga privasi
                  Informasi Pribadi dengan serius, dan akan terus menerapkan
                  perlindungan yang sesuai untuk melindungi Informasi Pribadi
                  ini dari penyalahgunaan atau pengungkapan yang tidak sah.
                </li>
                <li>
                  Informasi gabungan. Kami dapat menggabungkan Informasi Pribadi
                  dengan informasi lain yang kami kumpulkan atau dapatkan
                  tentang Anda (seperti informasi yang kami sumber dari mitra
                  pihak ketiga kami) untuk melayani Anda secara khusus, seperti
                  untuk memberikan produk atau layanan sesuai dengan preferensi
                  atau batasan Anda, atau untuk iklan atau tujuan penargetan
                  sesuai dengan kebijakan privasi ini. Ketika kami menggabungkan
                  Informasi Pribadi dengan informasi lain dengan cara ini, kami
                  memperlakukannya sebagai, dan menerapkan semua perlindungan
                  dalam kebijakan privasi ini yang berlaku untuk, Informasi
                  Pribadi.
                </li>
                <li>
                  Untuk mengaktifkan penggunaan integrasi dan plugin yang Anda
                  pilih untuk dihubungkan ke akun TSI Anda. Misalnya, jika Anda
                  memilih untuk menghubungkan integrasi Google ke akun TSI Anda,
                  kami akan meminta Anda untuk memberi kami izin untuk melihat
                  dan/atau mengunduh, sebagaimana berlaku, Google Spreadsheet,
                  Google Kontak, Google Analytics, dan Google Drive Anda. Ini
                  memungkinkan kami untuk mengonfigurasi integrasi Anda sesuai
                  dengan preferensi Anda. Misalnya, jika Anda ingin menggunakan
                  integrasi Google Kontak untuk berbagi template di akun TSI
                  Anda dengan kontak di buku alamat Google Anda, kami perlu
                  mengakses Google Kontak Anda untuk berbagi template.
                </li>
                <li>
                  Tujuan lain. Untuk melakukan tujuan bisnis lain yang sah,
                  serta tujuan sah lainnya yang akan kami beri tahukan kepada
                  Anda.
                </li>
              </ul>
              <br />
              <br />
              <span className="font-bold">
                C. Cookie dan Teknologi Pelacakan
              </span>
              <br />
              Kami dan mitra kami dapat menggunakan berbagai teknologi untuk
              mengumpulkan dan menyimpan informasi saat Anda menggunakan Layanan
              kami, dan ini mungkin termasuk menggunakan cookie dan teknologi
              pelacakan serupa, seperti piksel dan suar web. Misalnya, kami
              menggunakan suar web dalam email yang kami kirimkan atas nama
              Anda. Suar web ini melacak perilaku tertentu seperti apakah email
              yang dikirim melalui Layanan dikirim dan dibuka dan apakah tautan
              dalam email diklik. Mereka juga memungkinkan kami untuk
              mengumpulkan informasi seperti alamat IP penerima, browser, jenis
              klien email, dan detail serupa lainnya. Kami menggunakan informasi
              ini untuk mengukur kinerja kampanye email Anda, dan untuk
              memberikan informasi analitik dan meningkatkan efektivitas Layanan
              kami. Laporan juga tersedia bagi kami saat kami mengirim email
              kepada Anda, sehingga kami dapat mengumpulkan dan meninjau
              informasi tersebut.
              <br /> <br />
              <span className="font-bold">D. Daftar Distribusi Anggota</span>
              <br />
              Daftar Distribusi dapat dibuat dengan beberapa cara, termasuk
              dengan mengimpor Kontak, seperti melalui CSV atau langsung dari
              klien email Anda. Daftar Distribusi Anda disimpan di server TSI
              yang aman. Kami tidak, dalam keadaan apa pun, menjual Daftar
              Distribusi Anda. Jika seseorang di Daftar Distribusi Anda mengeluh
              atau menghubungi kami, kami mungkin akan menghubungi orang itu.
              Anda dapat mengekspor (mengunduh) Daftar Distribusi Anda dari TSI
              kapan saja. Jika kami mendeteksi perilaku kasar atau ilegal yang
              terkait dengan Daftar Distribusi Anda, kami dapat membagikan
              Daftar Distribusi Anda atau bagiannya dengan ISP atau organisasi
              antispam yang terpengaruh sejauh diizinkan atau diwajibkan oleh
              hukum yang berlaku.
              <br /> <br />
              <span className="font-bold">
                E. Hak Perlindungan Data Lainnya
              </span>
              <br />
              Anda dan Kontak Anda mungkin memiliki hak perlindungan data
              berikut:
              <ul
                role="list"
                className="marker:text-dark mr-4 mt-4 list-disc pl-5  space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
              >
                <li>
                  Untuk mengakses, memperbaiki, memperbarui atau meminta
                  penghapusan Informasi Pribadi. TSI mengambil langkah-langkah
                  yang wajar untuk memastikan bahwa data yang kami kumpulkan
                  dapat diandalkan untuk tujuan penggunaannya, akurat, lengkap,
                  dan terbaru. Sebagai Anggota, Anda dapat mengelola banyak
                  pengaturan akun dan profil individu Anda di dalam dashboard
                  yang disediakan melalui platform TSI, atau Anda dapat
                  menghubungi kami secara langsung dengan mengirim email kepada
                  kami di{" "}
                  <a
                    className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                    href="mailto:legal@timkado.id"
                  >
                    legal@timkado.id
                  </a>
                  . Anda juga dapat mengelola informasi tentang Kontak Anda
                  dalam dasbor yang disediakan melalui platform TSI untuk
                  membantu Anda menanggapi permintaan untuk mengakses,
                  memperbaiki, memperbarui, atau menghapus informasi yang Anda
                  terima dari Kontak Anda.
                </li>
                <li>
                  Demikian pula, jika Informasi Pribadi dikumpulkan atau
                  diproses berdasarkan persetujuan, subjek data dapat menarik
                  persetujuan mereka kapan saja. Penarikan persetujuan Anda
                  tidak akan memengaruhi keabsahan pemrosesan apa pun yang kami
                  lakukan sebelum penarikan Anda, juga tidak akan memengaruhi
                  pemrosesan Informasi Pribadi Anda yang dilakukan dengan
                  mengandalkan alasan pemrosesan yang sah selain persetujuan.
                  Jika Anda menerima permintaan ini dari Kontak, Anda dapat
                  mengelompokkan daftar Anda dalam platform TSI untuk memastikan
                  bahwa Anda hanya memasarkan ke Kontak yang tidak memilih untuk
                  tidak menerima pemasaran tersebut.
                </li>
                <li>
                  Hak untuk mengeluh kepada otoritas perlindungan data tentang
                  pengumpulan dan penggunaan Informasi Pribadi. Untuk informasi
                  lebih lanjut, silakan hubungi otoritas perlindungan data lokal
                  Anda.
                </li>
              </ul>
              <br />
              Kami menanggapi semua permintaan yang kami terima dari individu
              yang ingin menggunakan hak perlindungan data mereka sesuai dengan
              undang-undang perlindungan data yang berlaku. Kami mungkin meminta
              Anda untuk memverifikasi identitas Anda untuk membantu kami
              menanggapi permintaan Anda secara efisien. Jika kami menerima
              permintaan dari salah satu Kontak Anda, kami akan mengarahkan
              Kontak tersebut untuk menghubungi Anda, atau, jika sesuai, kami
              dapat menanggapi permintaan mereka secara langsung.
              <br />
              <br />
              <h4 className="font-bold text-xl">3. Privasi untuk Kontak</h4>
              <br />
              Bagian ini berlaku untuk informasi yang kami proses tentang Kontak
              Anggota kami sebagai pengontrol data sesuai dengan kepentingan
              bisnis kami yang sah, sebagaimana dijelaskan di bagian &quot;Dasar
              Hukum untuk Pemrosesan&quot; di bawah ini. Layanan kami
              dimaksudkan untuk digunakan oleh Anggota kami. Akibatnya, untuk
              sebagian besar Informasi Pribadi yang kami kumpulkan dan proses
              tentang Kontak melalui Layanan, kami bertindak sebagai pemroses
              atas nama Anggota kami. TSI tidak bertanggung jawab atas privasi
              atau praktik keamanan Anggota kami, yang mungkin berbeda dari yang
              ditetapkan dalam kebijakan privasi ini. Silakan periksa dengan
              Anggota individu tentang kebijakan yang mereka miliki. Untuk
              tujuan bagian ini, &quot;Anda&quot; dan &quot;milik Anda&quot;
              merujuk ke Kontak.
              <br /> <br />
              <span className="font-bold">
                A. Informasi yang Kami Kumpulkan
              </span>
              <br />
              Informasi Pribadi yang mungkin kami kumpulkan atau terima tentang
              Anda secara umum termasuk dalam kategori berikut:
              <br /> <br />
              (i) Informasi yang kami terima tentang Kontak dari Anggota kami:
              Anggota dapat memberikan Informasi Pribadi tentang Anda kepada
              kami melalui Layanan. Misalnya, ketika Anggota mengunggah Daftar
              Distribusi mereka atau mengintegrasikan Layanan dengan situs web
              atau layanan lain (misalnya, ketika Anggota memilih untuk
              menghubungkan akun e-niaga mereka dengan TSI), atau ketika Anda
              mendaftar ke Daftar Distribusi Anggota di Formulir pendaftaran
              TSI, mereka dapat memberi kami informasi kontak tertentu atau
              Informasi Pribadi lainnya tentang Anda seperti nama, alamat email,
              alamat, atau nomor telepon Anda. Anda mungkin memiliki kesempatan
              untuk memperbarui beberapa informasi ini dengan memilih untuk
              memperbarui atau mengelola preferensi Anda melalui email yang Anda
              terima dari Anggota.
              <br /> <br />
              (ii) Informasi yang kami kumpulkan secara otomatis: Saat Anda
              berinteraksi dengan kampanye pengiriman pesan yang Anda terima
              dari Anggota atau menelusuri atau membeli dari toko Anggota yang
              terhubung, kami dapat mengumpulkan informasi tentang perangkat
              Anda dan interaksi dengan halaman arahan. Kami menggunakan cookie
              dan teknologi pelacakan lainnya untuk mengumpulkan beberapa
              informasi ini. Penggunaan cookie dan teknologi pelacakan lainnya
              oleh kami dibahas lebih lanjut di bawah ini.
              <ul
                role="list"
                className="marker:text-dark mr-4 mt-4 list-disc pl-5  space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
              >
                <li>
                  Informasi perangkat: Kami mengumpulkan informasi tentang
                  perangkat dan aplikasi yang Anda gunakan untuk mengakses email
                  yang dikirim melalui Layanan kami, seperti alamat IP Anda,
                  sistem operasi Anda, ID browser Anda, dan informasi lain
                  tentang sistem dan koneksi Anda.
                </li>
                <li>
                  Data penggunaan produk: Kami mengumpulkan data penggunaan
                  tentang Anda setiap kali Anda berinteraksi dengan email yang
                  dikirim melalui Layanan, yang dapat mencakup tanggal dan waktu
                  Anda mengakses email dan aktivitas penelusuran Anda (seperti
                  halaman apa yang dilihat). Kami juga mengumpulkan informasi
                  mengenai kinerja Layanan, termasuk metrik yang terkait dengan
                  pengiriman email dan komunikasi elektronik lainnya yang
                  dikirim oleh Anggota kami melalui Layanan. Informasi ini
                  memungkinkan kami untuk meningkatkan konten dan pengoperasian
                  Layanan dan memfasilitasi penelitian dan analisis Layanan.
                </li>
              </ul>
              <br />
              (iii) Informasi yang kami kumpulkan dari sumber lain: Dari waktu
              ke waktu, kami dapat memperoleh informasi tentang Anda dari sumber
              pihak ketiga, seperti platform media sosial dan penyedia data
              pihak ketiga. Kami mengambil langkah-langkah untuk memastikan
              bahwa pihak ketiga tersebut diizinkan secara hukum atau kontrak
              untuk mengungkapkan informasi tersebut kepada kami, dan kami
              menggunakan informasi ini untuk memberikan informasi media sosial
              yang tersedia untuk umum tentang Anda kepada Anggota yang telah
              mengaktifkan fitur &quot;Profil Sosial&quot; di akun TSI mereka .
              <br /> <br />
              <span className="font-bold">B. Penggunaan Informasi Pribadi</span>
              <br />
              Kami dapat menggunakan Informasi Pribadi yang kami kumpulkan atau
              terima tentang Anda untuk kepentingan bisnis kami yang sah,
              termasuk:
              <ul
                role="list"
                className="marker:text-dark mr-4 mt-4 list-disc pl-5  space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
              >
                <li>
                  Untuk menegakkan kepatuhan terhadap Ketentuan Penggunaan kami
                  dan hukum yang berlaku. Ini mungkin termasuk mengembangkan
                  alat dan algoritme yang membantu kami mencegah pelanggaran.
                </li>
                <li>
                  Untuk melindungi hak dan keamanan Anggota kami dan pihak
                  ketiga, serta kami sendiri. Misalnya, terkadang kami meninjau
                  konten kampanye email Anggota kami untuk memastikan mereka
                  mematuhi Ketentuan Penggunaan kami. Untuk meningkatkan proses
                  itu, kami memiliki perangkat lunak yang membantu kami
                  menemukan kampanye email yang mungkin melanggar Ketentuan
                  Penggunaan kami. Karyawan atau kontraktor independen kami
                  dapat meninjau kampanye email tertentu tersebut, yang mungkin
                  menyertakan informasi kontak Anda. Ini mengurangi jumlah spam
                  yang dikirim melalui server kami dan membantu kami
                  mempertahankan kemampuan pengiriman yang tinggi.
                </li>
                <li>
                  Untuk memenuhi persyaratan hukum, termasuk mematuhi perintah
                  pengadilan, permintaan penemuan yang sah, panggilan pengadilan
                  yang sah, dan mekanisme hukum lain yang sesuai.
                </li>
                <li>
                  Untuk memberikan informasi kepada perwakilan dan penasihat,
                  termasuk pengacara dan akuntan, untuk membantu kami mematuhi
                  persyaratan hukum, akuntansi, atau keamanan.
                </li>
                <li>
                  Untuk menuntut dan membela pengadilan, arbitrase, atau proses
                  hukum serupa.
                </li>
                <li>
                  Untuk menanggapi permintaan yang sah dari otoritas publik,
                  termasuk untuk memenuhi persyaratan keamanan nasional atau
                  penegakan hukum.
                </li>
                <li>
                  Untuk menyediakan, mendukung dan meningkatkan Layanan.
                  Misalnya, ini mungkin termasuk berbagi informasi Anda dengan
                  pihak ketiga untuk menyediakan dan mendukung Layanan kami atau
                  untuk membuat fitur-fitur tertentu dari Layanan tersedia bagi
                  Anggota kami. Saat kami membagikan Informasi Pribadi dengan
                  pihak ketiga, kami mengambil langkah-langkah untuk melindungi
                  informasi Anda dengan mewajibkan pihak ketiga ini untuk
                  membuat kontrak dengan kami yang mengharuskan mereka untuk
                  menggunakan Informasi Pribadi yang kami transfer kepada mereka
                  dengan cara yang konsisten dengan kebijakan privasi ini. dan
                  undang-undang privasi yang berlaku.
                </li>
                <li>
                  Untuk proyek analisis data kami. Proyek analitik data kami
                  menggunakan data dari akun TSI, termasuk Informasi Pribadi
                  Anda, untuk menyediakan dan meningkatkan Layanan. Kami
                  menggunakan informasi, seperti riwayat pembelian Anda, yang
                  diberikan kepada kami oleh Anggota, sehingga kami dapat
                  membuat prediksi, keputusan, dan produk yang lebih tepat untuk
                  Anggota kami. Misalnya, kami menggunakan data dari akun TSI
                  untuk mengaktifkan rekomendasi produk, segmentasi audiens, dan
                  fitur demografi yang diprediksi untuk Anggota kami. Jika Anda
                  memilih untuk tidak membagikan data ini, Anda dapat memilih
                  keluar dari proyek analisis data kapan saja dengan mengirim
                  email kepada kami di{" "}
                  <a
                    className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                    href="mailto:legal@timkado.id"
                  >
                    legal@timkado.id
                  </a>
                  .
                </li>
                <li>
                  Tujuan lain. Untuk menjalankan tujuan bisnis lain yang sah,
                  serta tujuan lain yang sah.
                </li>
              </ul>
              <br />
              <span className="font-bold">
                C. Cookie dan Teknologi Pelacakan
              </span>
              <br />
              Kami dan mitra kami dapat menggunakan berbagai teknologi untuk
              mengumpulkan dan menyimpan informasi saat Anda berinteraksi dengan
              kampanye pengiriman pesan Anggota atau toko yang terhubung, dan
              ini mungkin termasuk penggunaan cookie dan teknologi pelacakan
              serupa, seperti piksel dan suar web. Misalnya, kami menggunakan
              suar web di halaman arahan yang kami kirim atas nama Anggota kami.
              Saat Anda menerima dan terlibat dengan kampanye Anggota, suar web
              melacak perilaku tertentu seperti apakah halaman arahan yang
              diakses melalui platform TSI dikirim dan dibuka dan apakah tautan
              dalam pesan diklik. Mereka juga memungkinkan kami untuk
              mengumpulkan informasi seperti alamat IP Anda, browser, jenis
              klien email, dan detail serupa lainnya. Kami menggunakan informasi
              ini untuk mengukur kinerja kampanye pengiriman pesan Anggota kami,
              dan untuk memberikan informasi analitik dan meningkatkan
              efektivitas Layanan kami.
              <br /> <br />
              <span className="font-bold">D. Dasar Hukum Pemrosesan</span>
              <br />
              Kami memproses Informasi Pribadi tentang Anda sebagai pengontrol
              data seperti yang dijelaskan di bagian ini, di mana pemrosesan
              tersebut adalah untuk kepentingan sah kami dan tidak
              dikesampingkan oleh kepentingan perlindungan data atau hak dan
              kebebasan dasar Anda. Kepentingan sah kami biasanya meliputi:
              meningkatkan, memelihara, menyediakan, dan meningkatkan teknologi,
              produk, dan layanan kami; dan memastikan keamanan Layanan dan
              Situs Web kami.
              <br /> <br />
              <span className="font-bold">
                E. Hak Perlindungan Data Lainnya
              </span>
              <br />
              Anda mungkin memiliki hak perlindungan data berikut:
              <ul
                role="list"
                className="marker:text-dark mr-4 mt-4 list-disc pl-5  space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
              >
                <li>
                  Untuk mengakses, memperbaiki, memperbarui atau meminta
                  penghapusan Informasi Pribadi Anda. TSI mengambil
                  langkah-langkah yang wajar untuk memastikan bahwa data yang
                  kami kumpulkan dapat diandalkan untuk tujuan penggunaannya,
                  akurat, lengkap, dan terbaru. Anda dapat menghubungi kami
                  secara langsung kapan saja untuk mengakses, memperbaiki,
                  memperbarui atau menghapus Informasi Pribadi Anda, atau
                  mengubah data Anda, dengan mengajukan permintaan kepada kami
                  di{" "}
                  <a
                    className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                    href="mailto:legal@timkado.id"
                  >
                    legal@timkado.id
                  </a>
                  . Kami akan mempertimbangkan permintaan Anda sesuai dengan
                  hukum yang berlaku.
                </li>
              </ul>
              <br />
              Sebagaimana dijelaskan di atas, untuk sebagian besar Informasi
              Pribadi yang kami kumpulkan dan proses tentang Kontak melalui
              Layanan, kami bertindak sebagai pemroses atas nama Anggota kami.
              Dalam kasus tersebut, jika Anda adalah Kontak dan ingin
              menggunakan hak perlindungan data apa pun yang mungkin tersedia
              untuk Anda berdasarkan hukum yang berlaku atau memiliki pertanyaan
              atau kekhawatiran tentang bagaimana Informasi Pribadi Anda
              ditangani oleh TSI sebagai pemroses atas nama Anggota individu
              kami, Anda harus menghubungi Anggota terkait yang menggunakan
              Layanan TSI, dan mengacu pada kebijakan privasi mereka yang
              terpisah.
              <br />
              <br /> Jika Anda tidak ingin lagi dihubungi oleh salah satu
              Anggota kami melalui Layanan kami, silakan berhenti berlangganan
              langsung dari buletin/milis Anggota tersebut atau hubungi Anggota
              secara langsung untuk memperbarui atau menghapus data Anda. Jika
              Anda menghubungi kami secara langsung, kami dapat menghapus atau
              memperbarui informasi Anda dalam waktu yang wajar dan setelah
              memberikan pemberitahuan kepada Anggota atas permintaan Anda.
              <br />
              <br />
              Kami menanggapi semua permintaan yang kami terima dari individu
              yang ingin menggunakan hak perlindungan data mereka sesuai dengan
              undang-undang perlindungan data yang berlaku. Kami mungkin meminta
              Anda untuk memverifikasi identitas Anda untuk membantu kami
              menanggapi permintaan Anda secara efisien.
              <br />
              <br />
              <h4 className="font-bold text-xl">4. Privasi untuk Pengunjung</h4>
              <br />
              Bagian ini berlaku untuk Informasi Pribadi yang kami kumpulkan dan
              proses melalui Situs Web kami dan dalam kegiatan bisnis kami yang
              biasa, seperti sehubungan dengan perekrutan, acara, penjualan, dan
              aktivitas pemasaran kami. Di bagian ini &quot;Anda&quot; dan
              &quot;milik Anda&quot; mengacu pada Pengunjung.
              <br /> <br />
              <span className="font-bold">
                A. Informasi yang Kami Kumpulkan
              </span>
              <br />
              (i) Informasi yang Anda berikan kepada kami di Situs Web atau
              lainnya: Bagian tertentu dari Situs Web kami mungkin meminta Anda
              untuk memberikan Informasi Pribadi secara sukarela. Misalnya, kami
              dapat meminta Anda untuk memberikan Informasi Pribadi tertentu
              (seperti nama Anda, detail kontak, nama perusahaan, informasi
              profil) untuk mendaftar akun TSI gratis atau berbayar, melamar
              peran dengan TSI, atau mengirimkan pertanyaan kepada kami. Kami
              juga dapat mengumpulkan Informasi Pribadi, seperti kontak dan
              detail pekerjaan serta umpan balik Anda, saat Anda menghadiri
              acara kami, ikut serta dalam survei, atau melalui interaksi bisnis
              atau pemasaran lain yang mungkin kami lakukan dengan Anda. Anda
              dapat memilih untuk memberikan informasi tambahan saat Anda
              berkomunikasi dengan kami atau berinteraksi dengan kami, dan kami
              akan menyimpan salinan komunikasi tersebut untuk catatan kami.
              <br /> <br />
              Informasi Pribadi yang diminta untuk Anda berikan, dan alasan
              mengapa Anda diminta untuk memberikannya, akan dijelaskan kepada
              Anda pada saat kami meminta Anda untuk memberikan Informasi
              Pribadi Anda. Kami juga akan memberi tahu Anda sebelum pengumpulan
              apakah penyediaan Informasi Pribadi yang kami kumpulkan bersifat
              wajib atau dapat diberikan secara sukarela dan konsekuensinya,
              jika ada, dari tidak memberikan informasi tersebut. <br /> <br />
              (ii) Informasi yang kami kumpulkan secara otomatis melalui Situs
              Web: Ketika Anda mengunjungi Situs Web kami, kami juga dapat
              mengumpulkan informasi tertentu secara otomatis dari perangkat
              Anda. Di beberapa negara, termasuk negara-negara di Wilayah
              Ekonomi Eropa, informasi ini dapat dianggap sebagai Informasi
              Pribadi berdasarkan undang-undang perlindungan data yang berlaku.
              <br /> <br />
              Secara khusus, informasi yang kami kumpulkan secara otomatis dapat
              mencakup alamat IP Anda, sistem operasi Anda, ID browser Anda,
              aktivitas penjelajahan Anda, dan informasi lain tentang sistem dan
              koneksi Anda dan bagaimana Anda berinteraksi dengan Situs Web kami
              dan situs web lain. Kami dapat mengumpulkan informasi ini sebagai
              bagian dari file log serta melalui penggunaan cookie atau
              teknologi pelacakan lainnya.
              <br /> <br />
              <span className="font-bold">B. Penggunaan Informasi Pribadi</span>
              <br />
              Kami dapat menggunakan informasi yang kami kumpulkan melalui Situs
              Web kami untuk berbagai alasan, termasuk:
              <ul
                role="list"
                className="marker:text-dark mr-4 mt-4 list-disc pl-5  space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
              >
                <li>
                  Untuk menyediakan, mengoperasikan, mengoptimalkan, dan
                  memelihara Situs Web kami.
                </li>
                <li>
                  Untuk mengirimkan informasi kepada Anda untuk tujuan
                  pemasaran, sesuai dengan preferensi pemasaran Anda.
                </li>
                <li>
                  Untuk tujuan rekrutmen jika Anda telah melamar peran di TSI.
                </li>
                <li>
                  Untuk menanggapi pertanyaan dan permintaan online Anda, dan
                  untuk memberi Anda informasi dan akses ke sumber daya atau
                  layanan yang Anda minta dari kami.
                </li>
                <li>
                  Untuk mengelola Website kami dan administrasi sistem dan
                  keamanan.
                </li>
                <li>Untuk meningkatkan navigasi dan konten Situs Web kami.</li>
                <li>
                  Untuk mengidentifikasi masalah server atau masalah IT atau
                  jaringan lainnya.
                </li>
                <li>Untuk memproses transaksi dan mengatur rekening online.</li>
                <li>
                  Untuk mengumpulkan statistik agregat tentang penggunaan situs
                  dan untuk lebih memahami preferensi Pengunjung kami.
                </li>
                <li>
                  Untuk melakukan penelitian dan pengembangan untuk meningkatkan
                  produk dan layanan kami.
                </li>
                <li>Untuk menyesuaikan konten dan tata letak Situs Web.</li>
                <li>
                  Untuk melaksanakan tujuan bisnis lain yang sah, serta tujuan
                  sah lainnya.
                </li>
              </ul>
              <br />
              Selain itu, kami dapat menggabungkan Informasi Pribadi dengan
              informasi lain yang kami kumpulkan atau dapatkan tentang Anda
              (seperti informasi yang kami sumber dari mitra pihak ketiga kami)
              untuk melayani Anda secara khusus, seperti untuk memberikan produk
              atau layanan sesuai dengan preferensi atau batasan Anda, atau
              untuk tujuan periklanan atau penargetan sesuai dengan kebijakan
              privasi ini. Ketika kami menggabungkan Informasi Pribadi dengan
              informasi lain dengan cara ini, kami memperlakukannya sebagai, dan
              menerapkan semua perlindungan dalam kebijakan privasi ini yang
              berlaku untuk, Informasi Pribadi. <br /> <br />
              <span className="font-bold">
                C. Cookie dan Teknologi Pelacakan
              </span>
              <br />
              Kami menggunakan cookie dan teknologi pelacakan serupa untuk
              mengumpulkan dan menggunakan Informasi Pribadi tentang Anda,
              termasuk untuk menayangkan iklan berbasis minat.
              <br /> <br />
              <span className="font-bold">
                D. Hak Perlindungan Data Lainnya
              </span>
              <br />
              Anda memiliki hak perlindungan data berikut:
              <ul
                role="list"
                className="marker:text-dark mr-4 mt-4 list-disc pl-5  space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
              >
                <li>
                  Untuk mengakses, memperbaiki, memperbarui, atau meminta
                  penghapusan Informasi Pribadi Anda. TSI mengambil
                  langkah-langkah yang wajar untuk memastikan bahwa data yang
                  kami kumpulkan dapat diandalkan untuk tujuan penggunaannya,
                  akurat, lengkap, dan terbaru. Anda dapat menghubungi kami
                  secara langsung kapan saja untuk mengakses, mengoreksi,
                  memperbarui, atau menghapus Informasi Pribadi Anda, atau
                  mengubah data atau preferensi pemasaran Anda dengan
                  mengirimkan email kepada kami di{" "}
                  <a
                    className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                    href="mailto:legal@timkado.id"
                  >
                    legal@timkado.id
                  </a>
                  . Kami akan mempertimbangkan permintaan Anda sesuai dengan
                  hukum yang berlaku.
                </li>
                <li>
                  Demikian pula, jika kami telah mengumpulkan dan memproses
                  Informasi Pribadi Anda dengan persetujuan Anda, maka Anda
                  dapat menarik persetujuan Anda kapan saja. Penarikan
                  persetujuan Anda tidak akan memengaruhi keabsahan pemrosesan
                  apa pun yang kami lakukan sebelum penarikan Anda, juga tidak
                  akan memengaruhi pemrosesan Informasi Pribadi Anda yang
                  dilakukan dengan mengandalkan alasan pemrosesan yang sah
                  selain persetujuan.
                </li>
              </ul>
              <br />
              Kami menanggapi semua permintaan yang kami terima dari individu
              yang ingin menggunakan hak perlindungan data mereka sesuai dengan
              undang-undang perlindungan data yang berlaku. Kami mungkin meminta
              Anda untuk memverifikasi identitas Anda untuk membantu kami
              menanggapi permintaan Anda secara efisien.
              <br />
              <br />
              <h4 className="font-bold text-xl">5. Informasi Umum</h4>
              <br />
              <span className="font-bold">
                A. Bagaimana Kami Berbagi Informasi
              </span>
              <br />
              Kami dapat membagikan dan mengungkapkan Informasi Pribadi Anda
              kepada jenis pihak ketiga berikut untuk tujuan yang dijelaskan
              dalam kebijakan privasi ini (untuk tujuan bagian ini,
              &quot;Anda&quot; dan &quot;milik Anda&quot; merujuk ke Anggota,
              Kontak, dan Pengunjung kecuali dinyatakan lain):
              <br />
              <ul
                role="list"
                className="marker:text-dark mr-4 mt-4 list-[lower-roman] pl-5  space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
              >
                <li>
                  Penyedia layanan kami: Terkadang, kami membagikan informasi
                  Anda dengan penyedia layanan pihak ketiga kami, yang membantu
                  kami menyediakan dan mendukung Layanan kami dan fungsi terkait
                  bisnis lainnya. Misalnya, jika perlu untuk memberikan Anggota
                  sesuatu yang mereka minta (seperti mengaktifkan fitur seperti
                  Profil Sosial), maka kami dapat membagikan Informasi Pribadi
                  Anggota atau Kontak dengan penyedia layanan untuk tujuan itu.
                  Contoh lain termasuk menganalisis data, menghosting data,
                  melibatkan dukungan teknis untuk Layanan kami, memproses
                  pembayaran, dan mengirimkan konten. Penyedia layanan pihak
                  ketiga ini mengadakan kontrak yang mengharuskan mereka untuk
                  menggunakan Informasi Pribadi Anda hanya untuk penyediaan
                  layanan kepada kami dan dengan cara yang konsisten dengan
                  kebijakan privasi ini.
                </li>
                <li>
                  Mitra periklanan: Kami dapat bermitra dengan jaringan dan
                  pertukaran iklan pihak ketiga untuk menampilkan iklan di Situs
                  Web kami atau untuk mengelola dan menayangkan iklan kami di
                  situs lain dan dapat membagikan Informasi Pribadi Anggota dan
                  Pengunjung dengan mereka untuk tujuan ini. Kami dan mitra
                  pihak ketiga kami dapat menggunakan cookie dan teknologi
                  pelacakan lainnya, seperti piksel dan suar web, untuk
                  mengumpulkan informasi tentang aktivitas Anda di Situs Web
                  kami dan situs lain untuk memberi Anda iklan bertarget
                  berdasarkan aktivitas dan minat penelusuran Anda.
                </li>
                <li>
                  Setiap badan penegak hukum yang kompeten, badan pengatur,
                  lembaga pemerintah, pengadilan atau pihak ketiga lainnya di
                  mana kami yakin pengungkapan diperlukan (a) sebagai masalah
                  hukum atau peraturan yang berlaku, (b) untuk menjalankan,
                  menetapkan, atau membela hukum kami hak, atau (c) untuk
                  melindungi kepentingan vital Anda atau orang lain.
                </li>
                <li>
                  Pembeli potensial (dan agen serta penasihatnya) dalam hal
                  penjualan, merger, konsolidasi, likuidasi, reorganisasi, atau
                  akuisisi. Dalam hal itu, setiap pengakuisisi akan tunduk pada
                  kewajiban kami berdasarkan kebijakan privasi ini, termasuk hak
                  Anda untuk mengakses dan memilih. Kami akan memberi tahu Anda
                  tentang perubahan tersebut baik dengan mengirimkan email
                  kepada Anda atau memposting pemberitahuan di Situs Web kami.
                </li>
                <li>Setiap orang lain dengan persetujuan Anda.</li>
              </ul>
              <br /> <br />
              <span className="font-bold">B. Pilihan dan Penyisihan Anda</span>
              <br />
              Anggota dan Pengunjung yang telah memilih email pemasaran kami
              dapat memilih untuk tidak menerima email pemasaran dari kami kapan
              saja dengan mengklik tautan &quot;berhenti berlangganan&quot; di
              bagian bawah pesan pemasaran kami.
              <br /> <br />
              Selain itu, semua permintaan penyisihan dapat dilakukan dengan
              mengirim email kepada kami menggunakan detail kontak yang
              disediakan di bagian &quot;Pertanyaan dan Masalah&quot; di bawah
              ini. Harap dicatat bahwa beberapa komunikasi (seperti pesan
              layanan, pemberitahuan akun, informasi penagihan) dianggap
              transaksional dan diperlukan untuk manajemen akun, dan Anggota
              tidak dapat memilih keluar dari pesan ini kecuali Anda membatalkan
              akun TSI Anda.
              <br /> <br />
              <span className="font-bold">C. Keamanan Kami</span>
              <br />
              Kami mengambil langkah-langkah teknis dan organisasi yang tepat
              dan wajar untuk melindungi Informasi Pribadi dari kehilangan,
              penyalahgunaan, akses tidak sah, pengungkapan, perubahan, dan
              penghancuran, dengan mempertimbangkan risiko yang terlibat dalam
              pemrosesan dan sifat Informasi Pribadi. Jika Anda memiliki
              pertanyaan tentang keamanan Informasi Pribadi Anda, Anda dapat
              menghubungi kami di{" "}
              <a
                className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                href="mailto:legal@timkado.id"
              >
                legal@timkado.id
              </a>
              .
              <br /> <br />
              Akun TSI memerlukan nama pengguna dan kata sandi untuk masuk.
              Anggota harus menjaga keamanan nama pengguna dan kata sandi
              mereka, dan tidak pernah mengungkapkannya kepada pihak ketiga.
              Karena informasi di akun TSI Anggota sangat sensitif, kata sandi
              akun di-hash, yang berarti kami tidak dapat melihat kata sandi
              Anggota. Kami juga tidak dapat mengirim ulang kata sandi yang
              terlupakan. Kami hanya akan memberikan petunjuk kepada Anggota
              tentang cara mengatur ulang mereka. <br /> <br />
              <span className="font-bold">D. Retensi Data</span>
              <br /> Kami menyimpan Informasi Pribadi di mana kami memiliki
              bisnis yang sah atau kebutuhan hukum yang berkelanjutan untuk
              melakukannya. Periode retensi kami akan bervariasi tergantung pada
              jenis data yang terlibat, tetapi, secara umum, kami akan mengacu
              pada kriteria berikut untuk menentukan periode retensi:
              <ul
                role="list"
                className="marker:text-dark mr-4 mt-4 list-disc pl-5  space-y-3 text-dark dark:marker:text-secondary dark:text-secondary"
              >
                <li>
                  Apakah kami memiliki kebutuhan hukum atau kontrak untuk
                  menyimpan data.
                </li>
                <li>Apakah data diperlukan untuk menyediakan Layanan kami.</li>
                <li>
                  Apakah Anggota kami memiliki kemampuan untuk mengakses dan
                  menghapus data dalam akun TSI mereka.
                </li>
                <li>
                  Apakah Anggota kami secara wajar mengharapkan bahwa kami akan
                  menyimpan data sampai mereka menghapusnya atau sampai akun TSI
                  mereka ditutup atau dihentikan.
                </li>
              </ul>
              <br />
              Ketika kami tidak memiliki kebutuhan bisnis yang sah untuk
              memproses Informasi Pribadi Anda, kami akan menghapus atau
              menganonimkannya atau, jika ini tidak memungkinkan (misalnya,
              karena Informasi Pribadi Anda telah disimpan dalam arsip
              cadangan), maka kami akan menyimpan Anda dengan aman. Informasi
              Pribadi dan mengisolasinya dari pemrosesan lebih lanjut hingga
              penghapusan dapat dilakukan.
              <br /> <br />
              <span className="font-bold">
                E. Tempat Kami Menyimpan Informasi Pribadi Anda
              </span>
              <br />
              Informasi Pribadi yang kami kumpulkan dari Anda dapat disimpan di,
              ditransfer ke, atau diproses oleh penyedia layanan pihak ketiga.
              Kami akan menggunakan semua upaya yang wajar untuk memastikan
              bahwa semua penyedia layanan pihak ketiga tersebut memberikan
              tingkat perlindungan yang sebanding dengan komitmen kami
              berdasarkan Kebijakan Privasi ini.
              <br /> <br />
              Informasi Pribadi Anda juga dapat disimpan atau diproses di luar
              negara Anda oleh personel yang bekerja untuk kami di negara lain,
              atau oleh penyedia layanan pihak ketiga, pemasok, kontraktor, atau
              Afiliasi kami, sejauh diizinkan berdasarkan hukum yang berlaku.
              Dalam kasus seperti itu, kami akan memastikan bahwa Informasi
              Pribadi tersebut tetap tunduk pada tingkat perlindungan yang
              sebanding dengan apa yang diwajibkan berdasarkan undang-undang
              negara Anda (dan, dalam hal apa pun, sejalan dengan komitmen kami
              dalam Kebijakan Privasi ini).
              <br /> <br />
              <span className="font-bold">
                F. Keamanan Informasi Pribadi Anda
              </span>
              <br />
              Kerahasiaan Informasi Pribadi Anda adalah yang paling penting bagi
              kami. Kami akan menggunakan semua upaya yang wajar untuk
              melindungi dan mengamankan Informasi Pribadi Anda dari akses,
              pengumpulan, penggunaan, atau pengungkapan oleh orang yang tidak
              berwenang dan terhadap pemrosesan yang melanggar hukum, kehilangan
              yang tidak disengaja, penghancuran dan kerusakan atau risiko
              serupa. Sayangnya, transmisi informasi melalui Internet tidak
              sepenuhnya aman. Meskipun kami akan melakukan yang terbaik untuk
              melindungi Informasi Pribadi Anda, Anda mengakui bahwa kami tidak
              dapat menjamin integritas dan keakuratan Informasi Pribadi apa pun
              yang Anda kirimkan melalui Internet, atau menjamin bahwa Informasi
              Pribadi tersebut tidak akan dicegat, diakses, diungkapkan, diubah,
              atau dihancurkan oleh pihak ketiga yang tidak berwenang, karena
              faktor-faktor di luar kendali kami. Anda bertanggung jawab untuk
              menjaga kerahasiaan detail Akun Anda dan Anda tidak boleh
              membagikan kata sandi Anda kepada siapa pun, dan Anda harus selalu
              menjaga keamanan perangkat seluler yang Anda gunakan.
              <br /> <br />
              <span className="font-bold">G. Bahasa</span>
              <br />
              Jika ada ketidaksesuaian antara versi bahasa Inggris dari
              Kebijakan Privasi ini dan versi bahasa lainnya, versi bahasa
              Inggris yang akan berlaku.
              <br /> <br />
              <span className="font-bold">H. Pengakuan Dan Persetujuan</span>
              <br />
              (i) Dengan menerima Kebijakan Privasi, Anda mengakui bahwa Anda
              telah membaca dan memahami Kebijakan Privasi ini dan Anda menerima
              semua ketentuannya. Secara khusus, Anda setuju dan mengizinkan
              kami mengumpulkan, menggunakan, mengung-kapkan, menyimpan,
              mentransfer, atau memproses Informasi Pribadi Anda sesuai dengan
              Kebijakan Privasi ini. <br /> <br />
              (ii) Dalam keadaan di mana Anda memberikan kepada kami Informasi
              Pribadi yang berkaitan dengan individu lain (seperti Informasi
              Pribadi yang berkaitan dengan pasangan, anggota keluarga, atau
              teman Anda), Anda menyatakan dan menjamin bahwa Anda telah
              memperoleh persetujuan individu tersebut untuk, dan dengan ini
              persetujuan atas nama individu tersebut, pengumpulan, penggunaan,
              pengungkapan, dan pemrosesan Informasi Pribadinya oleh kami.{" "}
              <br /> <br />
              (iii) Anda dapat menarik persetujuan Anda untuk setiap atau semua
              pengumpulan, penggunaan, atau pengungkapan Informasi Pribadi Anda
              kapan saja dengan memberi kami pemberitahuan yang wajar secara
              tertulis menggunakan perincian kontak yang disebutkan di bawah
              ini. Anda juga dapat menarik persetujuan Anda kepada kami untuk
              mengirimkan komunikasi dan informasi tertentu kepada Anda melalui
              fasilitas &quot;opt-out&quot; atau &quot;unsubscribe&quot; yang
              terdapat dalam pesan kami kepada Anda. Tergantung pada keadaan dan
              sifat persetujuan yang Anda tarik, Anda harus memahami dan
              mengakui bahwa setelah penarikan persetujuan tersebut, Anda
              mungkin tidak lagi dapat menggunakan Layanan. Penarikan
              persetujuan oleh Anda dapat mengakibatkan penghentian Akun Anda
              atau hubungan kontraktual Anda dengan kami, dengan semua hak dan
              kewajiban yang masih harus dibayar tetap sepenuhnya dilindungi
              undang-undang. Setelah menerima pemberitahuan Anda untuk menarik
              persetujuan untuk pengumpulan, penggunaan, atau pengungkapan
              Informasi Pribadi Anda, kami akan memberi tahu Anda tentang
              kemungkinan konsekuensi dari penarikan tersebut sehingga Anda
              dapat memutuskan apakah Anda memang ingin menarik persetujuan.
              <br /> <br />
              <span className="font-bold">I. Data Anoymised</span>
              <br />
              Kami dapat membuat, menggunakan, melisensikan atau mengungkapkan
              Informasi Pribadi, dengan ketentuan, bagaimanapun, (i) bahwa semua
              pengidentifikasi telah dihapus sedemikian rupa sehingga data,
              sendiri atau dalam kombinasi dengan data lain yang tersedia, tidak
              dapat dikaitkan atau dikaitkan dengan atau tidak dapat
              mengidentifikasi orang, dan (ii) yang telah digabungkan dengan
              data serupa sehingga data asli menjadi bagian dari kumpulan data
              yang lebih besar. <br /> <br />
              <span className="font-bold">J. Platform Pihak Ketiga</span>
              <br />
              Layanan, Situs Web, dan materi pemasaran dapat berisi tautan ke
              situs web, plug-in, dan aplikasi yang dioperasikan oleh pihak
              ketiga (&quot;Platform Pihak Ketiga&quot;). Mengklik tautan ini
              atau mengaktifkan koneksi apa pun ke Platform Pihak Ketiga ini
              memungkinkan pihak ketiga tersebut mengumpulkan dan memproses
              Informasi Pribadi Anda. Kami juga terkadang menggunakan Platform
              Pihak Ketiga untuk mengumpulkan Informasi Pribadi Anda. Sebelum
              mengirimkan atau mengunggah Informasi Pribadi apa pun melalui
              Platform Pihak Ketiga ini, Anda harus berkonsultasi dengan syarat
              dan ketentuan serta kebijakan privasi Platform Pihak Ketiga ini
              untuk mengetahui bagaimana mereka mengumpulkan dan menggunakan
              Informasi Pribadi Anda. Kami tidak mengontrol atau menerima
              kewajiban atau tanggung jawab atas Platform Pihak Ketiga ini
              dan/atau pengumpulan, penggunaan, pemeliharaan, pembagian, atau
              pengungkapan data dan informasi oleh pihak ketiga tersebut. <br />{" "}
              <br />
              Iklan yang terdapat di Layanan, Situs Web, atau beroperasi sebagai
              tautan ke situs web pengiklan dan dengan demikian informasi apa
              pun yang mereka kumpulkan berdasarkan klik Anda pada tautan itu
              akan dikumpulkan dan digunakan oleh pengiklan terkait sesuai
              dengan kebijakan privasi pengiklan tersebut. Jika Anda memilih
              untuk menghubungkan akun email atau pesan Anda (mis. Whatsapp,
              LINE, Facebook Messenger) ke platform kami, Anda akan menggunakan
              serangkaian fitur yang dibuat menggunakan teknologi dari Delapan
              Belas Pte Ltd. (selanjutnya dikenal sebagai &quot;Delapan
              Belas&quot;). Dengan mendaftar atau menggunakan aplikasi DAISI,
              Anda memahami dan menyetujui bahwa Delapan Belas akan memiliki
              akses ke informasi Anda dan akan diizinkan untuk menggunakan
              informasi tersebut untuk tujuan tertentu dan terbatas untuk
              memberikan Layanan kepada Anda, sesuai dengan perjanjian kami
              dengan Delapan Belas. <br /> <br />
              Anda memiliki pilihan untuk mengintegrasikan aspek metadata pesan
              Anda dengan akun Anda melalui integrasi kami dengan Delapan Belas.
              Kami akan meminta persetujuan Anda untuk menghubungkan akun Google
              Anda ke akun DAISI Anda. Langkah ini opsional tetapi bisa sangat
              berharga dalam membantu Anda memanfaatkan platform kami sebaik
              mungkin dengan melacak interaksi Anda dengan prospek dan pelanggan
              Anda.
              <br /> <br />
              Saat Anda menghubungkan akun Google Anda dengan platform DAISI
              melalui Delapan Belas, kami akan memiliki akses ke informasi
              tertentu seperti header meta email (pengirim, penerima, dan
              tanggal), isi pesan email dan baris subjek, atau informasi lain
              seperti tautan dibuka (&quot;
              <span className="font-bold">Data Google</span>&quot;).
              <br /> <br />
              Kami hanya memproses Data Google yang Anda berikan kepada kami
              melalui integrasi ini untuk memberikan Layanan kepada Anda dan
              untuk meningkatkan Layanan, sesuai dengan Persyaratan Penggunaan
              Terbatas Google. Kami tidak mengakses sendiri Data Google secara
              independen kecuali kami terlebih dahulu mendapatkan persetujuan
              Anda untuk melihat Data Google (misalnya, untuk memberi Anda
              dukungan teknis), kami perlu melakukannya untuk tujuan keamanan
              internal, untuk mematuhi hukum yang berlaku, atau jika data
              dikumpulkan sepenuhnya dan dianonimkan untuk tujuan penggunaan
              internal dan tidak dapat digunakan untuk mengidentifikasi Anda
              atau penerima email Anda.
              <br /> <br />
              Selain itu, kami hanya akan mentransfer Data Google kepada orang
              lain jika perlu untuk menyediakan atau menyempurnakan fitur yang
              dapat dilihat pengguna yang menonjol dalam Layanan, untuk mematuhi
              undang-undang yang berlaku, atau sebagai bagian dari merger,
              akuisisi, atau penjualan aset. Kami juga tidak menggunakan Data
              Google untuk tujuan periklanan. <br /> <br />
              Kapan saja, Anda dapat memutuskan sambungan akun Google Anda dan
              menghapus data ini di akun Anda atau dengan menghubungi{" "}
              <a
                className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                href="mailto:legal@timkado.id"
              >
                legal@timkado.id
              </a>{" "}
              dan meminta agar data tersebut dihapus.
              <br /> <br />
              <span className="font-bold">
                Informasi yang Kami Kumpulkan Dari Sumber Lain
              </span>
              <br />
              Kami juga dapat memperoleh informasi dari sumber lain dan
              menggabungkannya dengan informasi yang kami kumpulkan melalui
              Layanan kami. Misalnya, kami dapat mengumpulkan informasi tentang
              Anda dari pihak ketiga, termasuk namun tidak terbatas pada situs
              media sosial, biro kredit, penyedia pengayaan data, dan sumber
              yang tersedia untuk umum.
              <br /> <br />
              <span className="font-bold">
                K. Perubahan Kebijakan Privasi Ini
              </span>
              <br /> Kami dapat meninjau dan mengubah Kebijakan Privasi ini atas
              kebijakan kami sendiri dari waktu ke waktu, untuk memastikan bahwa
              kebijakan tersebut konsisten dengan perkembangan kami di masa
              mendatang, dan/atau perubahan persyaratan hukum atau peraturan.
              Jika kami memutuskan untuk mengubah Kebijakan Privasi ini, kami
              akan memberi tahu Anda tentang perubahan tersebut melalui
              pemberitahuan umum yang dipublikasikan di Aplikasi dan/atau Situs
              Web, atau ke alamat email Anggota Anda yang tercantum di Akun
              Anda. Anda setuju bahwa Anda bertanggung jawab untuk meninjau
              Kebijakan Privasi ini secara berkala untuk informasi terbaru
              tentang pemrosesan data dan praktik perlindungan data kami, dan
              bahwa Anda terus menggunakan Aplikasi atau Situs Web, komunikasi
              dengan kami, atau akses ke dan penggunaan layanan kami setelah
              setiap amandemen terhadap Kebijakan Privasi ini akan merupakan
              penerimaan Anda terhadap amandemen tersebut.
              <br /> <br />
              <span className="font-bold">L. Pertanyaan & Kekhawatiran</span>
              <br />
              Jika Anda memiliki pertanyaan atau komentar, atau jika Anda
              memiliki kekhawatiran tentang cara kami menangani masalah privasi,
              silakan kirim email kepada kami di{" "}
              <a
                className="underline text-primary hover:text-blue-500 visited:text-purple-600 dark:text-blue-200"
                href="mailto:legal@timkado.id"
              >
                legal@timkado.id
              </a>
              .
            </div>
            {/* // End - privacy english */}
          </div>
        </div>
      </div>
      <Script src=".\js\scripttermprivacy.js"></Script>
    </section>
  );
}

export default termsprivacy;
