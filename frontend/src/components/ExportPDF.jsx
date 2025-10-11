import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontSize: 11,
        fontFamily: "Helvetica",
        backgroundColor: "#ffffff",
        
    },
    header: {
        backgroundColor: "#f0f0f0",
        borderColor: "#ccc",
        marginBottom: 20,
        padding: 10,
        borderBottomWidth: 2,
    },
    textLogo: {
        fontSize: 24, 
        fontWeight: 700,
    },
    textMotto: {
        color: '#008000',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    contentsHeader: {
        borderBottomWidth: 1,
        backgroundColor: "#f0f0f0",
        borderColor: "#ccc",
        padding: 5,
        textAlign: "left",
        fontWeight: 700,
        fontSize: 16,
    },
    tableHeader: {
        marginTop: 10,
        flexDirection: "row",
        borderBottomWidth: 1,
        backgroundColor: "#f0f0f0",
        borderColor: "#ccc",
        padding: 5,
        textAlign: "left",
        fontWeight: 700,
    },
    tableRow: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#eee",
        padding: 5,
    },
    cell: {
        flex: 1,
        textAlign: "left"   
    },
    footer: {
        position: "absolute",
        bottom: 20,
        left: 30,
        right: 30,
        fontSize: 9,
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopWidth: 1,
        paddingTop: 8,
    }
});

const downloadTime = new Date().toLocaleString();

const ExportPDF = ({activeUser, users}) =>(
        <Document>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.textLogo}>FreshCart</Text>
                <Text style={styles.textMotto}>Learn Anything, Anytime, Anywhere</Text>
                <Text>Email: info@freshcart.com</Text>
                <Text>123 business Road, Dodoma</Text>
            </View>
            {/* Contents Heading */}
            <View style={styles.contentsHeader}>
                <Text >Our User Accounts</Text>
            </View>

            {/* Table Header */}
            <View style={styles.tableHeader}>
                <Text style={[styles.cell, {flex: 0.2}]}>ID</Text>
                <Text style={[styles.cell, { flex: 1 }]}>First name</Text>
                <Text style={[styles.cell, { flex: 1 }]}>Last name</Text>
                <Text style={[styles.cell, { flex: 1 }]}>Username</Text>
                <Text style={[styles.cell, { flex: 0.8 }]}>Role</Text>
                <Text style={[styles.cell, { flex: 1.6 }]}>Email</Text>
            </View>

            {/* Table Rows */}
            {users.map((user, index) => (
                <View style={styles.tableRow}>
                    <Text style={[styles.cell, { flex: 0.2 }]}>{ index + 1}</Text>
                    <Text style={[styles.cell, { flex: 1 }]}>{ user.first_name}</Text>
                    <Text style={[styles.cell, { flex: 1 }]}>{ user.last_name}</Text>
                    <Text style={[styles.cell, { flex: 1 }]}>{ user.username}</Text>
                    <Text style={[styles.cell, { flex: 0.8 }]}>{ user.role}</Text>
                    <Text style={[styles.cell, { flex: 1.6 }]}>{ user.email}</Text>
                </View> 
            ))}
            

            {/* Footer */}
            <View style={styles.footer}>
                <Text>Downloaded by: {activeUser.first_name} {activeUser.last_name}</Text>
                <Text>Retrieved from the system: { downloadTime}</Text>
            </View>
            </Page>
        </Document> 
    )
    
export default ExportPDF;