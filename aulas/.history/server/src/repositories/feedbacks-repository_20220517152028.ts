export interface FeedbackCreateData {
    type: string
    comment: string
    screenshot? : string
}


export interface kFeedbacksRepository {
    create: (data: FeedbackCreateData) => Promise<void>;

}