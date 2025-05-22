import { NextResponse } from 'next/server';
import { ListTablesCommand } from '@aws-sdk/client-dynamodb';
import { client } from '@/lib/aws-config';

export async function GET() {
  try {
    // Debug: Log environment variables (they will be undefined if not loaded)
    console.log('AWS Region:', process.env.AWS_REGION);
    console.log('AWS Access Key ID exists:', !!process.env.AWS_ACCESS_KEY_ID);
    console.log('AWS Secret Key exists:', !!process.env.AWS_SECRET_ACCESS_KEY);

    const command = new ListTablesCommand({});
    const response = await client.send(command);
    
    return NextResponse.json({
      success: true,
      tables: response.TableNames,
      message: 'Successfully connected to DynamoDB'
    });
  } catch (error) {
    console.error('DynamoDB connection error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      message: 'Failed to connect to DynamoDB'
    }, { status: 500 });
  }
} 