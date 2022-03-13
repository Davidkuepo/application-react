import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";
import { Locale } from "./Locale";
import messages from "./messages";
const provider=({ children, Locale=Locale.ENGLISH}) =>(
    <IntlProvider
    locale={Locale}
    textComponent={Fragment}
    messages={messages[Locale]}
    >
         {children}
    </IntlProvider>
   
);

export default provider