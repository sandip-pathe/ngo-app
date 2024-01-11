import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Platform } from 'react-native';
import TimePicker from '../../components/TimePicker';

interface Attachment {
    name: string;
    uri: string;
}

const EventForm: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [topic, setTopic] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [contact, setContact] = useState<string>('');
    const [activities, setActivities] = useState<string>('');
    const [resources, setResources] = useState<string>('');
    const [finance, setFinance] = useState<Attachment | null>(null);
    const [feedback, setFeedback] = useState<string>('');
    const [objectives, setObjectives] = useState<string>('');

    const handleSubmit = () => {
        if (!name || !topic || !time || !location || !contact || !activities || !resources || !finance || !feedback || !objectives) {
            alert('Please fill in all the required fields.');
            return;
        }
        alert('Your event data has been submitted successfully.');
    };

    return (
        <ScrollView>
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Event Data Form</Text>
                {/* ... (rest of the code remains the same) ... */}
                <Text style={{ marginVertical: 10 }}>Name:</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
                    value={name}
                    onChangeText={setName}
                    placeholder="Event Name"
                />
                <Text style={{ marginVertical: 10 }}>Topic:</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
                    value={topic}
                    onChangeText={setTopic}
                    placeholder="Enter the topic of the event"
                />
                <Text style={{ marginVertical: 10 }}>Start Time:</Text>
                <TimePicker selectedTime={''} onTimeChange={function (time: string): void {
                    throw new Error('Function not implemented.');
                }} />
                <Text style={{ marginVertical: 10 }}>End Time:</Text>
                <TimePicker selectedTime={''} onTimeChange={function (time: string): void {
                    throw new Error('Function not implemented.');
                }} />
                <Text style={{ marginVertical: 10 }}>Location:</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
                    value={location}
                    onChangeText={setLocation}
                    placeholder="Enter the location of the event"
                />
                <Text style={{ marginVertical: 10 }}>Contact Person:</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
                    value={contact}
                    onChangeText={setContact}
                    placeholder="Enter the name and phone number of the contact person"
                />
                <Text style={{ marginVertical: 10 }}>Activities:</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray', padding: 10, height: 100 }}
                    value={activities}
                    onChangeText={setActivities}
                    placeholder="Enter the activities planned for the event"
                    multiline={true}
                />
                <Text style={{ marginVertical: 10 }}>Resources Used:</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray', padding: 10, height: 100 }}
                    value={resources}
                    onChangeText={setResources}
                    placeholder="Enter the resources used for the event"
                    multiline={true}
                />
                <Text style={{ marginVertical: 10 }}>Finance:</Text>
                <Text style={{ marginVertical: 10 }}>Feedback:</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray', padding: 10, height: 100 }}
                    value={feedback}
                    onChangeText={setFeedback}
                    placeholder="Enter the feedback received for the event"
                    multiline={true}
                />
                <Text style={{ marginVertical: 10 }}>Objectives Achieved:</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray', padding: 10, height: 100 }}
                    value={objectives}
                    onChangeText={setObjectives}
                    placeholder="Enter the objectives achieved by the event"
                    multiline={true}
                />
                <Button
                    title="Submit"
                    onPress={handleSubmit}
                    color="green"
                />
            </View>
        </ScrollView>
    );
};

export default EventForm;
// Export the component