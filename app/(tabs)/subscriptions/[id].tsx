import { Link, useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

const SubscriptionDetails = () => {
    const { id } = useLocalSearchParams<{ id: string }>()
    return (
        <View>
            <Text>SubscriptionDetails - {id}</Text>
            <Link href="/" className='mt-4 rounded bg-primary px-4 py-2 text-white'>
                Back to Home
            </Link>
        </View>
    )
}

export default SubscriptionDetails