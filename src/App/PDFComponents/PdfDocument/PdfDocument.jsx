import React from "react";
import { Document, Page, View, Text } from "@react-pdf/renderer";
export default function PdfDocument(props) {
    return (
        <Document>
            <Page>
                <View>
                    <Text style={{color:"blue",fonctSize:"18pt",textAlign:"center"}}>
                        {props.meme.text}
                    </Text>
                </View>
            </Page>
        </Document>
    );
}